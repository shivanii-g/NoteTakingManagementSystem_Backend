const mongoose = require('mongoose')
// const Schema= mongoose.Schema,
//     autoIncrement= require('mongoose-auto-increment');
// var connection= mongoose.createConnection(
//     "mongodb+srv://Shivanii:Database@123@trail.simt2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     // "mongodb://localhost/imagesInMongoDB",
//     {useNewUrlParser : true, useUnifiedTopology: true}

// )
// autoIncrement.initialize(connection);

const userSchema = new mongoose.Schema({
    idUser: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
})

userSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps
const user = mongoose.model("user", userSchema)
module.exports = user