import { taxesCalculator } from '../taxes-calculator';

describe('taxesCalculator', () => {
  it('should calculate the taxes properly for a book', () => {
    expect(taxesCalculator(12.49, 1, 'book')).toEqual(0);
  });

  it('should return 5% if the item is exempt from basic taxes but it is imported', () => {
    expect(taxesCalculator(10, 1, 'imported book')).toEqual(0.5);
  });

  it('should return 10% if the item is not exempt from basic taxes and it is not imported', () => {
    expect(taxesCalculator(10, 1, 'music CD')).toEqual(1);
  });

  it('should return 15% if the item is not exempt from basic taxes and it is imported', () => {
    expect(taxesCalculator(10, 1, 'imported music CD')).toEqual(1.5);
  });

  it('should calculate the taxes individually and round them up to the nearest 0.05', () => {
    expect(taxesCalculator(11.25, 3, 'imported boxes of chocolates')).toEqual(
      0.6 * 3
    );
  });
});
