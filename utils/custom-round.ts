/**
 * Returns the rounded number to the nearest 0.05.
 * @param n the number to round
 * @returns the rounded number to the nearest 0.05
 */
export const customRound = (n: number) => {
  const rounded = Math.floor(n * 100);
  const mod = rounded % 5;
  if (mod !== 0) {
    return (rounded + (5 - mod)) / 100;
  }
  return rounded / 100;
};
