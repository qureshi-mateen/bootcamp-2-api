const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String }
    }
}, {
    timestamps: true,
    collection: 'users',
    versionKey: false
});

module.exports = mongoose.model('users', usersSchema);