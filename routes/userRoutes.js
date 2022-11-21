const express = require("express")
const app= express()
var cors = require('cors');
app.use(cors())
require('dotenv/config');

const {addUser,login, getUsers, getOneUser, updateUser, deleteUser, getUserDetailsTotal} = require("../controllers/userController")

app.post("/addUser", addUser)

app.post("/loginUser",login);

app.get("/getAllUsers", getUsers)

app.get("/getUser/:idUser",getOneUser)

app.put("/updateUser/:idUser",updateUser)

app.delete("/deleteUser/:idUser", deleteUser)


module.exports= app