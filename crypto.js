const crypto = require('crypto');

const text = 'Hello, Crypto World!';

const hash = crypto.createHash('sha256').update(text).digest('hex');

console.log('Texto Original', text);
console.log(`Hash SHA-256: ${hash}`);
