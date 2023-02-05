const crypto = require('crypto');

const getDecryptedMessage = (privateKey, encryptedMessage) => {
    return crypto.privateDecrypt(privateKey, encryptedMessage);
};

module.exports = getDecryptedMessage;

