import { readFileSync } from 'fs';
import { generateReceipt } from './utils/receipt-generator';

const index = () => {
  const url = process.argv.slice(2)[0];
  const content = readFileSync(url, {
    encoding: 'ascii',
  });
  return generateReceipt(content);
};

console.log(index());

export default index;
