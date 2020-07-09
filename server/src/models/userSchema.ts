export {};
// _id and user_id are uuid's
let mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
let Schema = mongoose.Schema;

let userSchema = new Schema({
    _id: {
        type: String,
        required: true
     },
      
    email: {
        type: String,
        required: true
     },
    
    password: {
        type: Number,
        required: true
     },
    
    item_ids: {
        type: [],
        required: true
     }, 
})

module.exports = mongoose.model('User', userSchema);