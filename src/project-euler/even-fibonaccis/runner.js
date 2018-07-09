#!./node_modules/.bin/babel-node

import get from '../helpers/get';
import fibonacci from '../../fibonacci';

console.info(get('even', fibonacci(1000)));
