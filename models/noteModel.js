const mongoose = require('mongoose')
const Schema= mongoose.Schema,
    autoIncrement= require('mongoose-auto-increment');
var connection= mongoose.createConnection(
    "mongodb+srv://Shivanii:Database@123@trail.simt2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&keepAlive=true&autoReconnect=true",
    {useNewUrlParser : true}
)
autoIncrement.initialize(connection);

const noteSchema = new Schema({
    idUser: String,
    noteTitle: String,
    noteDesc: String,
   

})

noteSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps
noteSchema.plugin(autoIncrement.plugin,{model: 'note', field: 'idNote', startAt: 100});
const note = connection.model("note", noteSchema)
module.exports = note