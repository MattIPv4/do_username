#[macro_use(lazy_static)]
extern crate lazy_static;

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

	lazy_static! {
		pub static ref SEA_CREATURES: std::vec::Vec<&'static str> = vec!["walrus", "seal", "fish", "shark", "clam", "coral", "whale", "crab", "lobster", "starfish", "eel", "dolphin", "squid", "jellyfish", "ray", "shrimp", "mantaRay", "angler", "snorkler", "scubaDiver", "urchin", "anemone", "morel", "axolotl"];
		pub static ref SEA_OBJECTS: std::vec::Vec<&'static str> = vec!["boat", "ship", "submarine", "yacht", "dinghy", "raft", "kelp", "seaweed", "anchor"];
		pub static ref ADJECTIVE_DESCRIPTORS: std::vec::Vec<&'static str> = vec!["cute", "adorable", "lovable", "happy", "sandy", "bubbly", "friendly", "floating", "drifting"];
		pub static ref SIZE_DESCRIPTORS: std::vec::Vec<&'static str> = vec!["large", "big", "small", "giant", "massive", "tiny", "little"];
		pub static ref CREATURE_DESCRIPTORS: std::vec::Vec<&'static str> = vec!["swimming", "sleeping", "eating", "hiding"];
		pub static ref SEA_LIST: Vec<&'static str> = SEA_OBJECTS.iter().cloned().chain(SEA_CREATURES.iter().cloned()).collect();
		pub static ref DESCRIPTORS: Vec<&'static str> = ADJECTIVE_DESCRIPTORS.iter().cloned().chain(SIZE_DESCRIPTORS.iter().cloned()).collect();
		pub static ref COLORS: std::vec::Vec<&'static str> = vec!["blue", "blueGreen", "darkCyan", "electricBlue", "greenBlue", "lightCyan", "lightSeaGreen", "seaGreen", "turquoise", "aqua", "aquamarine", "teal", "cyan", "gray", "darkBlue", "cerulean", "azure", "lapis", "navy"];
	}

	pub fn generate(size: Option<usize>) -> String {
		let max_size = size.unwrap_or(30);
		let descriptors_and_verbs: Vec<&'static str> = DESCRIPTORS.iter().cloned().chain(CREATURE_DESCRIPTORS.iter().cloned()).collect();

		let rand_noun = random(SEA_LIST.to_vec());
		let rand_color = random(COLORS.to_vec());
		
		let rand_desc: &str;
		if SEA_CREATURES.contains(&rand_noun) {
			rand_desc = random(descriptors_and_verbs);
		} else {
			rand_desc = random(DESCRIPTORS.to_vec());
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
