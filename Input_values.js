import { stricEquals } from './StrictEquals.js';

//Introduce your values here:
const a = 'Hello';
const b = 'Hello';
//

console.log('--- StricEquals ---');
console.log('Variable A = ' + a);
console.log('Variable B = ' + b);
console.log('Result ' + '(' + a + ', ' + b + ')' + stricEquals(a, b));
console.log('-------------------');
