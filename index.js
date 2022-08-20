const encdec = require('node-rsa')
const key = new encdec({b: 512})

module.exports = {
    // encryption perform 
    enc: function(text){
        let encrypt = key.encrypt(text, 'base64')
        return encrypt;  
    },
    // decryption perform 
    dec : function(text){
        let decrypted = key.decrypt(text, 'utf8');
        return decrypted;
    },
    // create public key 
    public_key : function (){
        let data = key.exportKey('public')
        return data
    },
    //to create private key
    private_key : function (){
        let data = key.exportKey('private')
        return data;
    },
 // encrypt with public key 
    key_public : function (publikKey,text){
        const public = new encdec(publikKey)
        const data = public.encrypt(text,'base64')
        return data;
    },
    // encrypt with private key
    key_private : function (privateKey,text){
        const private = new encdec(privateKey)
        const data = private.decrypt(text,'utf8')
        return data;
    },
    
}