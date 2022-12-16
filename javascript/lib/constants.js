const SEA_CREATURES = module.exports.SEA_CREATURES = Object.freeze([
    'walrus', 'seal', 'fish', 'shark', 'clam', 'coral', 'whale', 'crab',
    'lobster', 'starfish', 'eel', 'dolphin', 'squid', 'jellyfish', 'ray',
    'shrimp', 'mantaRay', 'angler', 'snorkler', 'scubaDiver', 'urchin',
    'anemone', 'morel', 'axolotl',
]);

const SEA_OBJECTS = module.exports.SEA_OBJECTS = Object.freeze([
    'boat', 'ship', 'submarine', 'yacht', 'dinghy', 'raft', 'kelp',
    'seaweed', 'anchor',
]);

const ADJECTIVE_DESCRIPTORS = module.exports.ADJECTIVE_DESCRIPTORS = Object.freeze([
    'cute', 'adorable', 'lovable', 'happy', 'sandy', 'bubbly', 'friendly',
    'floating', 'drifting',
]);

const SIZE_DESCRIPTORS = module.exports.SIZE_DESCRIPTORS = Object.freeze([
    'large', 'big', 'small', 'giant', 'massive', 'tiny', 'little',
]);

module.exports.CREATURE_DESCRIPTORS = Object.freeze([
    'swimming', 'sleeping', 'eating', 'hiding',
]);

module.exports.SEA_LIST = Object.freeze(
    SEA_OBJECTS.concat(SEA_CREATURES),
);

module.exports.DESCRIPTORS = Object.freeze(
    ADJECTIVE_DESCRIPTORS.concat(SIZE_DESCRIPTORS),
);

module.exports.COLORS = Object.freeze([
    'blue', 'blueGreen', 'darkCyan', 'electricBlue', 'greenBlue',
    'lightCyan', 'lightSeaGreen', 'seaGreen', 'turquoise', 'aqua',
    'aquamarine', 'teal', 'cyan', 'gray', 'darkBlue', 'cerulean', 'azure',
    'lapis', 'navy',
]);
