const getEncryptedMessage = require('./utils/getEncryptedMessage');
const getDecryptedMessage = require('./utils/getDecryptedMessage');
const getGeneratedRsaKeyPair = require('./utils/getGeneratedRsaKeyPair');

require('dotenv').config();

const { publicKey, privateKey } = getGeneratedRsaKeyPair();
const encryptedMessage = getEncryptedMessage(publicKey, process.env.SECRET_MESSAGE);
const decryptedMessage = getDecryptedMessage(privateKey, encryptedMessage);

console.log('Secret message is:', process.env.SECRET_MESSAGE);
console.log('Encrypted message is:', encryptedMessage.toString());
console.log('Decrypted message is:', decryptedMessage.toString());
