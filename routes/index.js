const express=require('express')
const app= express()
const userRoutes= require('./userRoutes')
const noteRoutes= require('./noteRoutes')

app.use('/user', userRoutes)
app.use('/notes',noteRoutes)

module.exports=app 