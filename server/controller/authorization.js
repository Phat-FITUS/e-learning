const model = require('../model/User');
const {hash, encodeJWT} = require('../ultis/Encode');

const verify = async (req, res) => {
    const userId = req.userId;
    const user = await model.findById(userId);
    if (user) {
        return res.status(200).json({message: 'Tài khoản tồn tại!'});
    }

    res.status(400).json({message: 'Tài khoản không tồn tại!'});
}

const signUp = async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) return res.status(401).json({message: 'Thông tin không được để trống!'});
    
    const usernameDuplicated = await model.findOne({username});

    if (usernameDuplicated) {
        return res.status(400).json({message: 'Tên đăng nhập đã tồn tại!'});
    }

    const hashedPassword = hash(password);
    const newUser = new model({username, password: hashedPassword});

    await newUser.save();

    const accessToken = jwt.sign({userId: newUser.id}, process.env.SECRET_KEY, { expiresIn: '15m' });

    return res.status(200).json({message: 'Tài khoản được tạo thành công!', accessToken});
}

const signIn = async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) return res.status(401).json({message: 'Thông tin không được để trống!'});

    const user = await model.findOne({username});
    if (!user) {
        return res.status(400).json({message: 'Tài khoản không tồn tại!'});
    }

    const hashedPassword = hash(password);
    if (hashedPassword !== user.password) {
        return res.status(400).json({message: 'Mật khẩu không đúng!'});
    }

    const accessToken = encodeJWT({userId: user.id});
    return res.status(200).json({message: 'Đăng nhập thành công!', accessToken});
}

module.exports = {verify, signUp, signIn};