const express = require("express")
const app= express()
var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
var fs = require('fs');
require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");


const {addNotes, getAllNotes, updateNotes, deleteNotes, getNote, getNotesByIdUser} = require("../controllers/noteController")


app.post("/addNotes",addNotes)

app.get("/getAllNotes", getAllNotes)

app.get("/getNoteByidUser/:idUser",getNotesByIdUser)

app.get("/getNote/:idNote",getNote)

app.put("/updateNotes/:idNote", updateNotes)

app.delete("/deleteNotes/:idNote", deleteNotes)

module.exports = app