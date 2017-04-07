/** @module errors */
'use strict';

const emptyKey = new Error('Key buffer cannot be empty.');
const wrongKeyLength = new Error('Key is shorter than the expected size');

exports = {
  emptyKey,
  wrongKeyLength,
};

module.exports = {
  emptyKey,
  wrongKeyLength,
};
