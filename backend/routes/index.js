const route = require('express').Router();

route.get('/', (req,res) =>{
    res.status(200).json({
        message: "Dashboard Codigram"
    })
})

const userRoute = require('./user')
const postingRoute = require('./posting')

route.use('/users',userRoute)
route.use('/postings',postingRoute)

module.exports = route;