const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const hash = (data) => {
    return crypto.createHash('sha256').update(data).digest('hex');
}

const encodeJWT = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '15m' });
}

module.exports = {hash, encodeJWT};