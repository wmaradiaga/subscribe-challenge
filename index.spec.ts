import index from './index';
import { readFileSync } from 'fs';

describe('index', () => {
  it('should calculate the taxes properly for input 1', () => {
    const content = readFileSync('./sample-data/input1.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output1.txt', {
      encoding: 'ascii',
    });

    const result = index(content);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the taxes properly for input 2', () => {
    const content = readFileSync('./sample-data/input2.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output2.txt', {
      encoding: 'ascii',
    });

    const result = index(content);

    expect(result).toEqual(expectedResult);
  });

  it('should calculate the taxes properly for input 3', () => {
    const content = readFileSync('./sample-data/input3.txt', {
      encoding: 'ascii',
    });
    const expectedResult = readFileSync('./sample-data/output3.txt', {
      encoding: 'ascii',
    });

    const result = index(content);

    expect(result).toEqual(expectedResult);
  });
});
