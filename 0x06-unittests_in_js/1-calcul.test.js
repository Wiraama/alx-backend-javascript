const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber' () => {
  describe('SUM', () => {
    it('should return the sum of rounded inputs', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of rounded inputs', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 2.6), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 9.5, 2.5), 6);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded inputs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, 2.6), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 14.5, 2.5), 5);
    });

    it('should return "Error" if dividing by rounded 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0.4), 'Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error if the type is invalid', () => {
      assert.throws(() => calculateNumber('INVALID', 1.4, 3.6), {
        name: 'Error',
        message: 'Invalid type',
      });
    });
  });
});
