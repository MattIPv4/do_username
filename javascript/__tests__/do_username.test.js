const subject = require('../lib/do_username');

const privateFuncions = require('../lib/private_functions');

beforeEach(() => {
	jest.resetModules();
});

afterEach(() => {
	jest.clearAllMocks();
});

describe('generate', () => {
	it('responds with a string', () => {
		expect(typeof subject.generate()).toBe('string');
	});

	it('responds with CamelCase string', () => {
		expect((subject.generate().match(/[A-Z]/g) || []).length).toBeGreaterThanOrEqual(3);
	});

	it('responds with whitespace-free string', () => {
		expect((subject.generate().match(/\s/g) || []).length).toBe(0);
	});

	describe('with noun part', () => {
		it('ends with a sea object or a creature', () => {
			jest.doMock('../lib/constants', () => {
				const actual = jest.requireActual('../lib/constants');

				return {
					...actual,
					SEA_LIST: ['walrus'],
				};
			});

			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate().endsWith('Walrus')).toBeTruthy();
		});
	});

	describe('with descriptor part', () => {
		it('starts with a descriptor', () => {
			jest.doMock('../lib/constants', () => {
				const actual = jest.requireActual('../lib/constants');

				return {
					...actual,
					SEA_CREATURES: [],
					DESCRIPTORS: ['cute'],
				};
			});

			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate().startsWith('Cute')).toBeTruthy();
		});
	});

	describe('with color part', () => {
		it('contains a color in generated username', () => {
			jest.doMock('../lib/constants', () => {
				const actual = jest.requireActual('../lib/constants');

				return {
					...actual,
					COLORS: ['blue'],
				};
			});
			// import again after mock
			const subjectMock = require('../lib/do_username');

			expect(subjectMock.generate().includes('Blue')).toBeTruthy();
		});
	});

	describe('with maxSize argument', () => {
		beforeEach(() => {
			jest.doMock('../lib/constants', () => {
				const actual = jest.requireActual('../lib/constants');

				return {
					...actual,
					SEA_CREATURES: [],
					DESCRIPTORS: ['cute'],
					COLORS: ['red'],
					SEA_LIST: ['walrus'],
				};
			});
		});

		it('responds with username shorter than or equal to given size', () => {
			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate(15).length).toBeLessThanOrEqual(15);
		});

		it('responds with full combination when appropriate', () => {
			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate(100)).toBe('CuteRedWalrus');
		});

		it('responds with descriptor + noun when appropriate', () => {
			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate(12)).toBe('CuteWalrus');
		});

		it('responds with color + noun when appropriate', () => {
			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate(9)).toBe('RedWalrus');
		});

		it('responds with part of the noun when appropriate', () => {
			// import again after mock
			const subjectMock = require('../lib/do_username');
			expect(subjectMock.generate(5)).toBe('Walru');
		});
	});

	describe('when is invalid', () => {
		const argumentError = 'The maxSize argument must be an integer number greater than zero.';
		it('raises ArgumentError negative values', () => {
			expect(() => {
				subject.generate(-99);
			}).toThrow(argumentError);
		});

		it('raises ArgumentError negative values', () => {
			expect(() => {
				subject.generate(0);
			}).toThrow(argumentError);
		});

		it('raises ArgumentError negative values', () => {
			// import again after mock
			expect(() => {
				subject.generate('abc');
			}).toThrow(argumentError);
		});
	});
});

describe('random noun', () => {
	beforeEach(() => {
		jest.doMock('../lib/constants', () => {
			const actual = jest.requireActual('../lib/constants');

			return {
				...actual,
				SEA_LIST: ['walrus'],
			};
		});
	});

	it('returns an item from the list of creatures and objects', () => {
		// import again after mock
		const privateFunctionsMock = require('../lib/private_functions');
		expect(privateFunctionsMock.randomNoun()).toBe('walrus');
	});
});

describe('random descriptor', () => {
	describe('when the noun is a sea object', () => {
		beforeEach(() => {
			jest.doMock('../lib/constants', () => {
				const actual = jest.requireActual('../lib/constants');

				return {
					...actual,
					SEA_CREATURES: [],
					DESCRIPTORS: ['cute'],
				};
			});
		});

		it('returns an item from the list of descriptors', () => {
			// import again after mock
			const privateFunctionsMock = require('../lib/private_functions');
			expect(privateFunctionsMock.randomDescriptor('walrus')).toBe('cute');
		});
	});

	describe('when the noun is a sea creature', () => {
		describe('with creature descriptors present', () => {
			beforeEach(() => {
				jest.doMock('../lib/constants', () => {
					const actual = jest.requireActual('../lib/constants');

					return {
						...actual,
						SEA_CREATURES: ['walrus'],
						DESCRIPTORS: [],
						CREATURE_DESCRIPTORS: ['huge'],
					};
				});
			});

			it('returns an item from the list of creature descriptors', () => {
				// import again after mock
				const privateFunctionsMock = require('../lib/private_functions');
				expect(privateFunctionsMock.randomDescriptor('walrus')).toBe('huge');
			});
		});

		describe('with generic descriptors present', () => {
			beforeEach(() => {
				jest.doMock('../lib/constants', () => {
					const actual = jest.requireActual('../lib/constants');

					return {
						...actual,
						SEA_CREATURES: ['walrus'],
						DESCRIPTORS: ['cute'],
						CREATURE_DESCRIPTORS: [],
					};
				});
			});

			it('returns an item from the list of creature descriptors', () => {
				// import again after mock
				const privateFunctionsMock = require('../lib/private_functions');
				expect(privateFunctionsMock.randomDescriptor('walrus')).toBe('cute');
			});
		});
	});
});

describe('random color', () => {
	beforeEach(() => {
		jest.doMock('../lib/constants', () => {
			const actual = jest.requireActual('../lib/constants');

			return {
				...actual,
				COLORS: ['red'],
			};
		});
	});

	it('returns an item from the list of colors', () => {
		// import again after mock
		const privateFunctionsMock = require('../lib/private_functions');
		expect(privateFunctionsMock.randomColor('walrus')).toBe('red');
	});
});

describe('format', () => {
	it('sets the first character to be uppercase', () => {
		expect(privateFuncions.format('test')).toBe('Test');
	});

	describe('with a string with existing uppercase characters', () => {
		it('does not force existing characters to lowercase', () => {
			expect(privateFuncions.format('testTesting')).toBe('TestTesting');
		});
	});
});

describe('combine username', () => {
	describe('when max_size allows for the full combination', () => {
		it('responds with full combination (descriptor + color + noun)', () => {
			expect(privateFuncions.combineUsername(100, 'Swimming', 'Red', 'Walrus')).toBe('SwimmingRedWalrus');
		});
	});

	describe('when max_size allows for the descriptor and noun', () => {
		it('responds with the descriptor + noun combination', () => {
			expect(privateFuncions.combineUsername(14, 'Swimming', 'Red', 'Walrus')).toBe('SwimmingWalrus');
		});
	});

	describe('when max_size allows for the noun', () => {
		it('responds with just the nounresponds with just the noun', () => {
			expect(privateFuncions.combineUsername(6, 'Swimming', 'Red', 'Walrus')).toBe('Walrus');
		});
	});

	describe('when max_size is shorter than the noun', () => {
		it('responds with the noun trimmed to the max size', () => {
			expect(privateFuncions.combineUsername(4, 'Swimming', 'Red', 'Walrus')).toBe('Walr');
		});
	});
});
