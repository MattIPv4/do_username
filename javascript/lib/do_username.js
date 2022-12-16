const {
    SEA_LIST,
    SEA_CREATURES,
    DESCRIPTORS,
    COLORS,
    CREATURE_DESCRIPTORS,
    ADJECTIVE_DESCRIPTORS,
    SEA_OBJECTS,
    SIZE_DESCRIPTORS,
} = require('./constants');

const { randomNoun, randomDescriptor, randomColor, format, combineUsername } = require('./private_functions');

const generate = (maxSize = 30) => {
    if (maxSize <= 0 || typeof maxSize !== 'number') {
        throw new Error('The maxSize argument must be an integer number greater than zero.');
    }

    let noun = randomNoun();
    let descriptor = randomDescriptor(noun);
    let color = randomColor();

    noun = format(noun);
    descriptor = format(descriptor);
    color = format(color);

    return combineUsername(maxSize, descriptor, color, noun);
};

module.exports = {
    SEA_LIST,
    SEA_CREATURES,
    DESCRIPTORS,
    COLORS,
    CREATURE_DESCRIPTORS,
    ADJECTIVE_DESCRIPTORS,
    SEA_OBJECTS,
    SIZE_DESCRIPTORS,
    generate,
};
