const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null || authHeader.split(' ')[0] !== 'BEARER') return res.status(401).json({message: 'Token sai định dạng'});

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(400).json({message: 'Token không thể xác thực'});

        req.userId = user.userId;

        next();
    })
}

module.exports = {verifyToken}