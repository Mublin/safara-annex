const jwt = require('jsonwebtoken')


const generateToken = (user) =>{
    return jwt.sign({
        username: user.username,
        email: user.email,
        name: user.name
    }, process.env.SECRET, 
    {
        expiresIn: '7d'
    })
}



const isAuth = (req, res, next) =>{
    const authorization = req.headers.authorization
    if (authorization) {
        const token = authorization.slice(7, authorization.length)
        jwt.verify(token, process.env.SECRET, function (err, decode) {
           if (err) {
                return res.status(401).send({message: "Invalid access"})
           }else{
            req.user = decode
            next()
           }
        })
    }
}









module.exports = {
    generateToken,
    isAuth
}