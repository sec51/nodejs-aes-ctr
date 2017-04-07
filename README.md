### Nodejs AES-256 CTR mode

This is an example of how to encrypt a file with NodeJS with AES in CTR mode and HMAC-SHA512.  
The `file_crypto.js` is an ES6 class which handles the counter for the `nonce` automatically.  
It also fails to encrypt in case it exceeded the maximum amount of blocks for its settings.  
The total amount of 16 bytes (128 bit) blocks is: `2147483647`  
The maximum file size this NodeJS class is capable of handling is therefore:  

```
2147483648 * 16bytes = ~32GB
```

after that, you will need to rotate the key. (Create a new instance of the FileCrypto class).

The class can be extended to handle bigger files.  
Please open an issue if you are interested about it.

Author

This library was written by Sec51 info@sec51.com.

### Licensing

The code in this repository is licensed under GNU General Public License v3.0. See LICENSE for the full license text.
