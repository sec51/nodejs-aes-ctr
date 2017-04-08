/* eslint-disable no-console */
'use strict';

// Simple usage of the AES-256 in CTR mode for ONE BLOCK !!!

const FileCrypto = require('./file_crypto');
const Key = require('./key');

const INPUT_ENCODING = 'utf8';
const OUTPUT_ENCODING = 'hex';

Promise.all([Key.generate(32), Key.generate(32), Key.generate(16)]).then(

  // After having successfully generated the keys
  keys => {

    // assign them to their variables
    const encryptionKey = keys[0];
    const hmacKey = keys[1];
    const iv = keys[2];

    // init the crypto class
    const fileCrypto = new FileCrypto(encryptionKey, iv);

    // encrypt chunk of fata
    fileCrypto.encryptChunk(Buffer.from('YELLOW_SUBMARINE', INPUT_ENCODING), hmacKey)

    .then(result => {
      // Resolve the promise
      // Print the cipher text in hex format (the buffer can be directly stored to file in case)
      console.log(result.cipherText.toString(OUTPUT_ENCODING));

      // the Mac needs to be stored as well next to it.
      console.log(result.mac.toString(OUTPUT_ENCODING));

      // return the result to proceed with the chaining
      return result;
    })
    .then((result) => {
      // at this point, using the same keys, decrypt the file
      // We encrypted only 1 block, therefore the counter is zero
      fileCrypto.decryptChunk(result.cipherText, result.mac, hmacKey, 0)
      .then(clear => {
        console.log(clear.toString(INPUT_ENCODING));
      });
    })
    .catch((err) => console.log(err));
  },
  reason => {
    console.log(reason);
  }
);
