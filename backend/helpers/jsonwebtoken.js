const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'codigram';

const tokenGenerator = (data) => {
    const {id,name,email,country,gender} = data 
    return jwt.sign({
        id,name,email,country,gender
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

module.exports = {
    tokenGenerator,tokenVerifier
}