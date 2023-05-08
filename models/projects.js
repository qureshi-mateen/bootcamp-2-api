const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String },
    tasks: [
        {
            title: { type: String },
            description: { type: String }
        }
    ],
    owner: { type: mongoose.Types.ObjectId, ref: 'users', required: true }
}, {
    timestamps: true,
    collection: 'projects',
    versionKey: false
});

module.exports = mongoose.model('projects', projectSchema);