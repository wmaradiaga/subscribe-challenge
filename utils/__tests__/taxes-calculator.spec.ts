import { taxesCalculator } from '../taxes-calculator';

describe('taxesCalculator', () => {
  it('should calculate the taxes properly for a book', () => {
    expect(taxesCalculator(12.49, 'book')).toEqual(0);
  });

  it('should return 5% if the item is exempt from basic taxes but it is imported', () => {
    expect(taxesCalculator(10, 'imported book')).toEqual(0.5);
  });

  it('should return 10% if the item is not exempt from basic taxes and it is not imported', () => {
    expect(taxesCalculator(10, 'music CD')).toEqual(1);
  });

  it('should return 15% if the item is not exempt from basic taxes and it is imported', () => {
    expect(taxesCalculator(10, 'imported music CD')).toEqual(1.5);
  });
});
