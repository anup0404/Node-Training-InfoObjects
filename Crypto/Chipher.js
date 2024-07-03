const crypto=require('crypto')
const chipher=crypto.createCipheriv('aes192','a password');
let encrypted=chipher.update('hello infoobject','utf-8','hex');
encrypted+=chipher.final('hex')
console.log(encrypted);