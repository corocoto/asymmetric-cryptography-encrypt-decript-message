const crypto = require('crypto');

const getGeneratedRsaKeyPair = () => {
    return crypto.generateKeyPairSync('rsa', {
        publicKeyEncoding: {
            format: 'pem',
            type: 'pkcs1'
        },
        privateKeyEncoding: {
            format: 'pem',
            type: 'pkcs1'
        },
        modulusLength: 4096
    });
};

module.exports = getGeneratedRsaKeyPair;
