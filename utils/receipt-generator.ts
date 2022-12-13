import { taxesCalculator } from './taxes-calculator';

/**
 * This function will generate a receipt based on the shopping basket.
 * @param shoppingBasket string of the shopping basket following the specified format.
 * @returns string of the receipt following the specified format.
 */
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
      const itemTaxes = taxesCalculator(quantity * price, description);

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
