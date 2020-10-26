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

const CREATURE_DESCRIPTORS = module.exports.CREATURE_DESCRIPTORS = Object.freeze([
    'swimming', 'sleeping', 'eating', 'hiding',
]);

const SEA_LIST = module.exports.SEA_LIST = Object.freeze(
    SEA_OBJECTS.concat(SEA_CREATURES)
);

const DESCRIPTORS = module.exports.DESCRIPTORS = Object.freeze(
    ADJECTIVE_DESCRIPTORS.concat(SIZE_DESCRIPTORS)
);

const COLORS = module.exports.COLORS = Object.freeze([
    'blue', 'blueGreen', 'darkCyan', 'electricBlue', 'greenBlue',
    'lightCyan', 'lightSeaGreen', 'seaGreen', 'turquoise', 'aqua',
    'aquamarine', 'teal', 'cyan', 'gray', 'darkBlue', 'cerulean', 'azure',
    'lapis', 'navy',
]);

const random = (items) => items[Math.random() * items.length | 0];

const randomNoun = () => random(SEA_LIST);

const randomDescriptor = (noun) => {
    if (!SEA_CREATURES.includes(noun)) return random(DESCRIPTORS);

    return random(DESCRIPTORS.concat(CREATURE_DESCRIPTORS));
};

const format = (string) => string[0].toUpperCase() + string.slice(1);

const randomColor = () => random(COLORS);

const combineUsername = (maxSize, descriptor, color, noun) => {
    if ((descriptor + color + noun).length <= maxSize)
        return descriptor + color + noun;
    else if ((descriptor + noun).length <= maxSize)
        return descriptor + noun;
    else if ((color + noun).length <= maxSize)
        return color + noun;
    else
        return noun.slice(0, maxSize);
};

module.exports.generate = (maxSize = 30) => {
    let noun = randomNoun();
    let descriptor = randomDescriptor(noun);
    let color = randomColor();

    noun = format(noun);
    descriptor = format(descriptor);
    color = format(color);

    return combineUsername(maxSize, descriptor, color, noun);
};
