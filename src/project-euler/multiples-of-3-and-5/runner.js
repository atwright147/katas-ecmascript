#!./node_modules/.bin/babel-node

import getMultiples from './index.js';
import sumArray from '../helpers/sum-array';

console.info(getMultiples(20, [3,5]));
console.info(sumArray(getMultiples(999, [3,5])));  // 999 because the test says up to 1000 (not including 1000)
