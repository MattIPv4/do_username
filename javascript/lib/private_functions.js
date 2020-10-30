const { SEA_LIST, SEA_CREATURES, DESCRIPTORS, COLORS, CREATURE_DESCRIPTORS } = require('./constants');

const random = (items) => items[Math.random() * items.length | 0];

module.exports.randomNoun = () => random(SEA_LIST);

module.exports.randomDescriptor = (noun) => {
    if (!SEA_CREATURES.includes(noun)) return random(DESCRIPTORS);

    return random(DESCRIPTORS.concat(CREATURE_DESCRIPTORS));
};

module.exports.format = (string) => string[0].toUpperCase() + string.slice(1);

module.exports.randomColor = () => random(COLORS);

module.exports.combineUsername = (maxSize, descriptor, color, noun) => {
    if ((descriptor + color + noun).length <= maxSize)
        return descriptor + color + noun;
    else if ((descriptor + noun).length <= maxSize)
        return descriptor + noun;
    else if ((color + noun).length <= maxSize)
        return color + noun;
    else
        return noun.slice(0, maxSize);
};
