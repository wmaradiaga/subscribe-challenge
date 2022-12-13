import { Book, Food, MedicalProducts } from './categories';
import { readFileSync } from 'fs';

/**
 * Returns the rounded number to the nearest 0.05.
 * @param n the number to round
 * @returns the rounded number to the nearest 0.05
 */
const customRound = (n: number) => {
  const rounded = Math.floor(n * 100);
  const mod = rounded % 5;
  if (mod !== 0) {
    return (rounded + (5 - mod)) / 100;
  }
  return rounded / 100;
};

/**
 * This function will return the taxes of an item based on the item total and description.
 * @param total the item total without taxes
 * @param description the item description
 */
const calculateTaxes = (total: number, description: string) => {
  // First I will check if the item is exempt from taxes.
  const exempt =
    description.match(new RegExp(Food.join('|'), 'gi')) ||
    description.match(new RegExp(Book.join('|'), 'gi')) ||
    description.match(new RegExp(MedicalProducts.join('|'), 'gi'));
  // Then I will check if the item is imported.
  const imported = description.includes('imported');
  // Then I will calculate the taxes based on the item description.
  const basicTaxes = exempt ? 0 : total * 0.1;
  const importationTaxes = imported ? total * 0.05 : 0;
  // Then I will return the total price with taxes.
  return customRound(basicTaxes + importationTaxes);
};

export const generateReceipt = (shoppingBasket: string) => {
  // First I will split the string into an array of lines to get the items.
  let output = '';
  const items = shoppingBasket.split('\n');
  // Then I need to iterate over the items to transform them into the specified output.
  const { taxes, total } = items.reduce(
    (acc, item) => {
      const fragments = item.split(' ');
      const quantity = parseInt(fragments.shift() || '0');
      const price = parseFloat(fragments.pop() || '0');
      const description = fragments.join(' ').replace(' at', ':');
      const itemTotal = quantity * price;
      const itemTaxes = calculateTaxes(quantity * price, description);

      output += `${quantity} ${description} ${(itemTaxes + itemTotal).toFixed(
        2
      )}\n`;
      return {
        taxes: acc.taxes + itemTaxes,
        total: acc.total + itemTotal + itemTaxes,
      };
    },
    { total: 0, taxes: 0 }
  );
  output += `Sales Taxes: ${taxes.toFixed(2)}\n`;
  output += `Total: ${total.toFixed(2)}`;
  return output;
};

const index = () => {
  const url = process.argv.slice(2)[0];
  const content = readFileSync(url, {
    encoding: 'ascii',
  });
  return generateReceipt(content);
};

console.log(index());

export default index;
