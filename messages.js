const mongoose  = require('mongoose');
const messageSchema = new mongoose.Schema({
    name:{type: String, required:true,},
    email:{type: String, required:true,},
    subject:{type: String, required:true,},
    message:{type: String, required:true,},
},{
    collection: 'messages'
})

const model = mongoose.model('messageSchema',messageSchema);
module.exports = model