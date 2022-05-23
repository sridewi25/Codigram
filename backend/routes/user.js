const Userroute = require('express').Router()
const UserController = require('../controllers/UserController')
const {authentication} = require('../middlewares/auth')

Userroute.get('/',UserController.getAllUser)
Userroute.post('/register',UserController.createUser)
Userroute.get('/info_user',authentication,UserController.getInfoUser)
Userroute.post('/login',UserController.loginuser)



module.exports = Userroute


