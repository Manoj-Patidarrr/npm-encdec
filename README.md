# npm-encdec 

encdec Package is perform encryption and decryption for the request and response.
this package is usefull for instant performing encryption and decryption

// how to require necdec package 
const encdec = require('encdec')

// how to perform encryption..and dcryption
 let text = "this is npm package" 
 let encrypt = encdec.enc(text)
 console.log(encrypt)
 let decrypt = encdec.dec(encrypt)
 console.log(decrypt)
 
 // how to generate public key through encdec for securely encryption and dcryption
  let publicKey = encdec.public_key()
  let privateKey = encdec.private_key()
  
 // After then you can perform encryption with public_key
 let encrypt_key = encdec.key_public(publicKey,text)
 console.log(encrypt_key)
 let dcrypt_key = encdec.key_private(privateKey,encrypt_key)
 console.log(dcrypt_key)
