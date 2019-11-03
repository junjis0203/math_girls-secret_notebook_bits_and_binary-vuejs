import Composer from './composer';
import { right, left, up, down, complement, and } from './filters';
import { strs2bins } from './utils';

const input = strs2bins([
  '0000000000000000',
  '0000000000000000',
  '0011111111111100',
  '0011111111111100',
  '0011111111111100',
  '0011100000000000',
  '0011100000000000',
  '0011111111100000',
  '0011111111100000',
  '0011111111100000',
  '0011100000000000',
  '0011100000000000',
  '0011100000000000',
  '0011100000000000',
  '0000000000000000',
  '0000000000000000',
]);

const composer = new Composer();

const in1 = composer.addInput(input);

const out1_1 = composer.addFilter(in1, right);
const out1_2 = composer.addFilter(in1, left);
const out1_3 = composer.addFilter(in1, up);
const out1_4 = composer.addFilter(in1, down);

const out2_1 = composer.addFilter2(out1_1, out1_2, and);
const out2_2 = composer.addFilter2(out1_3, out1_4, and);

const out3 = composer.addFilter2(out2_1, out2_2, and);

const out4 = composer.addFilter(out3, complement);

const out5 = composer.addFilter2(in1, out4, and);

const app = composer.makeApp('#app', out5);
