import { generateReceipt } from '../receipt-generator';
import { readFileSync } from 'fs';

describe('generateReceipt', () => {
  it('should calculate the taxes properly for input 1', () => {
    const content = readFileSync('./sample-data/input1.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output1.txt', {
      encoding: 'ascii',
    });

    const result = generateReceipt(content);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the taxes properly for input 2', () => {
    const content = readFileSync('./sample-data/input2.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output2.txt', {
      encoding: 'ascii',
    });

    const result = generateReceipt(content);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the taxes properly for input 3', () => {
    const content = readFileSync('./sample-data/input3.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output3.txt', {
      encoding: 'ascii',
    });

    const result = generateReceipt(content);

    expect(result).toEqual(expectedResult);
  });

  it('should throw if the input is empty', () => {
    expect(() => generateReceipt('')).toThrowError(
      'The shopping basket is empty.'
    );
  });

  it('should throw if shopping basket structure is not valid', () => {
    const content = 'book without quantity and price';

    expect(() => generateReceipt(content)).toThrow();
  });
});
