import { Book, Food, MedicalProducts } from '../categories';
import { customRound } from './custom-round';

/**
 * This function will return the taxes of an item based on the item total and description.
 * @param total the item total without taxes
 * @param description the item description
 */
export const taxesCalculator = (
  price: number,
  quantity: number,
  description: string
) => {
  // First I will check if the item is exempt from taxes.
  const exempt =
    description.match(new RegExp(Food.join('|'), 'gi')) ||
    description.match(new RegExp(Book.join('|'), 'gi')) ||
    description.match(new RegExp(MedicalProducts.join('|'), 'gi'));
  // Then I will check if the item is imported.
  const imported = description.includes('imported');
  // Then I will calculate the taxes based on the item description.
  const basicTaxes = exempt ? 0 : 10;
  const importationTaxes = imported ? 5 : 0;
  const totalTaxesPerItem = ((basicTaxes + importationTaxes) * price) / 100;
  // Then I will return the total price with taxes.
  return customRound(totalTaxesPerItem) * quantity;
};
