
const encdec = require('./index.js')
 var text = "my name is manoj111";
 const encrypt = encdec.enc(text)
 console.log(encrypt);

 const decrypt = encdec.dec(encrypt)
 console.log(decrypt);

 const public = encdec.public_key()
 console.log(public);

 const private = encdec.private_key()
 console.log(private);


const data1 = encdec.key_public(public,text)
console.log(data1)

const test = encdec.key_private(private,data1)
console.log(test)
