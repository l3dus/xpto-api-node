const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    _id: {
        oid: {
            type: String,
            required: true,
        },
    },
    info: {
        username: {
           type: String,
           required: true,
        },
        address: {
            type: String,
            required: true,
         },
         birthdate: {
           date:{
               type: Date,
           }
         },
         document: {
            type: String,
            required: true,
            unique: true,
         },
         email: {
            type: String,
            required: true,
            unique: true,
         },
         firstname: {
            type: String,
            required: true,
         },
         lastname: {
            type: String,
            required: true,
         },
         phonenumber: {
            type: String,
            required: true,
         },
         createdAt: {
           date: {
                type: Date,
                default: Date.now,
           }
         },
         
    }, 
});

mongoose.model('Users', UsersSchema);