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

	pub fn get() -> String {
		let sea_creatures = vec!["walrus", "seal", "fish", "shark", "clam", "coral", "whale", "crab", "lobster", "starfish", "eel", "dolphin", "squid", "jellyfish", "ray", "shrimp", "mantaRay", "angler", "snorkler", "scubaDiver", "urchin", "anemone", "morel", "axolotl"];
		let sea_objects = vec!["boatShip", "submarine", "yacht", "dinghy", "raft", "kelp", "seaweed", "anchor"];
		let adjectives = vec!["cute", "adorable", "lovable", "happy", "sandy", "bubbly", "friendly", "floating", "drifting"];
		let mut size= vec!["large", "big", "small", "giant", "massive", "tiny", "little", "yuge"];
		let mut verbs = vec!["swimming", "sleeping", "eating", "hiding"];
		let colors = vec!["blue", "blueGreen", "darkCyan", "electricBlue", "greenBlue", "lightCyan", "lightSeaGreen", "seaGreen", "turquoise", "aqua", "aquamarine", "teal", "cyan", "gray", "darkBlue", "cerulean", "azure", "lapis", "navy"];
	
		let mut sea_list = sea_objects;
		let mut descriptors = adjectives;
		
		sea_list.append(&mut sea_creatures.clone());
		descriptors.append(&mut size);

		let mut descriptors_and_verbs = descriptors.clone();
		descriptors_and_verbs.append(&mut verbs);

		let rand_noun = random(sea_list);
		let rand_color = random(colors);
		
		let rand_desc: &str;
		if sea_creatures.contains(&rand_noun) {
			rand_desc = random(descriptors_and_verbs);
		} else {
			rand_desc = random(descriptors);
		}

		if format!("{}{}{}", rand_desc, rand_color, rand_noun).len() <= 30 {
			return up_format(vec![rand_desc, rand_color, rand_noun])
		} else if format!("{}{}", rand_desc, rand_noun).len() <= 30 {
			return up_format(vec![rand_desc, rand_noun])
		} else if format!("{}{}", rand_color, rand_noun).len() <= 30 {
			return up_format(vec![rand_color, rand_noun])
		} else {
			return up_format(vec![rand_noun])
		}
	}
}