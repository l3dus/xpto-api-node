const mongoose = require('mongoose');

const User = mongoose.model('Users');

//const fs = require('fs');

module.exports = {
   
    async store(req, res) {
        User.create({
            "_id": {
                "$oid": "5c4867c0204a2c1d6d70c466"
            },
            "info": {
                "username": "Lsouza34",
                "address": "Avenida Assis Brasil 2161",
                "birthdate": {
                    "$date": "1994-10-10T03:00:00.000Z"
                },
                "document": "00011122233",
                "email": "lucas@hotmail.com",
                "firstname": "Lucas",
                "lastname": "Souza",
                "phoneNumber": "+5551999999999"
            },
            "createdAt": {
                "$date": "2019-01-23T13:10:24.427Z"
            },
            "__v": 0
        });
    },

};