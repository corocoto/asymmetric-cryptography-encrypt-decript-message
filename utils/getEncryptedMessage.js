const crypto = require('crypto');

const getEncryptedMessage = (publicKey, message) => {
    const bufferMessage = Buffer.from(message, 'utf-8');

    return crypto.publicEncrypt(publicKey, bufferMessage);
}

module.exports = getEncryptedMessage;
