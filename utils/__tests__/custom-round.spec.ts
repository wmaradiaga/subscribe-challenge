import { customRound } from '../custom-round';

describe('customRound', () => {
  it('should round up to the nearest 0.05', () => {
    expect(customRound(1.01)).toEqual(1.05);
  });

  it('should not update the number if it is already rounded', () => {
    expect(customRound(1.05)).toEqual(1.05);
  });

  it('should round up to the nearest 0.05 even if the difference is greater', () => {
    expect(customRound(1.06)).toEqual(1.1);
  });
});
