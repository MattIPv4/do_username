const { generate } = require('../lib/do_username')

describe('do_username tests', () => {
  it('should have less than or equal number of maxSize args', () => {
    expect(generate(15).length).toBeLessThanOrEqual(15)
  })
});