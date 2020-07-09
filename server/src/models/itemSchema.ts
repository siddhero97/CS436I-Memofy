export {};
let mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

let Schema = mongoose.Schema;

// _id and user_id are uuid's
let itemSchema = new Schema({
    _id: {
        type: String,
        required: true
     },
      
    user_id: {
        type: String,
        required: true
     },
    
    count: {
        type: Number,
        required: true
     },
    
    name: {
        type: String,
        required: true
     }, 
     
    category: {
        type: String,
        required: true
     }, 
     
    icon: {
        type: String, 
        required: true
    },
    
    expiryDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema);