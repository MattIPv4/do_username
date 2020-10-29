const {
	SEA_LIST,
	SEA_CREATURES,
	SEA_OBJECTS,
	DESCRIPTORS,
	ADJECTIVE_DESCRIPTORS,
	COLORS,
	CREATURE_DESCRIPTORS,
	SIZE_DESCRIPTORS,
} = require('./constants');

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

const generate = module.exports.generate = (maxSize = 30) => {
    let noun = randomNoun();
    let descriptor = randomDescriptor(noun);
    let color = randomColor();

    noun = format(noun);
    descriptor = format(descriptor);
    color = format(color);

    return combineUsername(maxSize, descriptor, color, noun);
};
