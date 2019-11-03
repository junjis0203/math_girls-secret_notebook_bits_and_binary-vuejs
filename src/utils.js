// assume c is '0' or '1'
function str2bin(str) {
  return str.split('').map(c => parseInt(c));
}

function strs2bins(strs) {
  return strs.map(str => str2bin(str));
}

export {str2bin, strs2bins};
