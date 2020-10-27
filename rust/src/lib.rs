pub mod do_username {
	use rand::Rng;
	fn to_title_case(s: &str) -> String {
		let mut c = s.chars();
		match c.next() {
			None => String::new(),
			Some(f) => f.to_uppercase().chain(c).collect(),
		}
	}
	
	fn random(arr: Vec<&str>) -> &str {
		let mut rng = rand::thread_rng();
		let r = rng.gen_range(0, arr.len());
		arr[r]
	}
	fn up_format(arr: Vec<&str>) -> String {
		let mut new_arr = vec![];
		for elem in arr {
			new_arr.push(to_title_case(elem))
		}
		new_arr.join("")
	}
	pub const SEA_CREATURES: [&str; 24] = ["walrus", "seal", "fish", "shark", "clam", "coral", "whale", "crab", "lobster", "starfish", "eel", "dolphin", "squid", "jellyfish", "ray", "shrimp", "mantaRay", "angler", "snorkler", "scubaDiver", "urchin", "anemone", "morel", "axolotl"];
	pub const SEA_OBJECTS: [&str; 8] = ["boatShip", "submarine", "yacht", "dinghy", "raft", "kelp", "seaweed", "anchor"];
	pub const ADJECTIVE_DESCRIPTORS: [&str; 9] = ["cute", "adorable", "lovable", "happy", "sandy", "bubbly", "friendly", "floating", "drifting"];
	pub const SIZE_DESCRIPTORS: [&str; 8] = ["large", "big", "small", "giant", "massive", "tiny", "little", "yuge"];
	pub const CREATURE_DESCRIPTORS: [&str; 4] = ["swimming", "sleeping", "eating", "hiding"];
	pub const COLORS: [&str; 19] = ["blue", "blueGreen", "darkCyan", "electricBlue", "greenBlue", "lightCyan", "lightSeaGreen", "seaGreen", "turquoise", "aqua", "aquamarine", "teal", "cyan", "gray", "darkBlue", "cerulean", "azure", "lapis", "navy"];
	
	pub fn generate(size: Option<usize>) -> String {
		let max_size = size.unwrap_or(30);
		let mut sea_list = SEA_OBJECTS.to_vec();
		let mut descriptors = ADJECTIVE_DESCRIPTORS.to_vec();
		
		sea_list.extend(&SEA_CREATURES);
		descriptors.extend(&SIZE_DESCRIPTORS);
	
		let mut descriptors_and_verbs = descriptors.clone();
		descriptors_and_verbs.extend(&CREATURE_DESCRIPTORS);
	
		let rand_noun = random(sea_list.to_vec());
		let rand_color = random(COLORS.to_vec());
		
		let rand_desc: &str;
		if SEA_CREATURES.contains(&rand_noun) {
			rand_desc = random(descriptors_and_verbs);
		} else {
			rand_desc = random(descriptors);
		}

		if format!("{}{}{}", rand_desc, rand_color, rand_noun).len() <= max_size {
			return up_format(vec![rand_desc, rand_color, rand_noun])
		} else if format!("{}{}", rand_desc, rand_noun).len() <= max_size {
			return up_format(vec![rand_desc, rand_noun])
		} else if format!("{}{}", rand_color, rand_noun).len() <= max_size {
			return up_format(vec![rand_color, rand_noun])
		} else {
			return up_format(vec![rand_noun])[..max_size].to_string()
		}
	}
}
