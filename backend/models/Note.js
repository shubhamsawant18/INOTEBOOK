// Note.js

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        unique: true,
        required: false,
    },
   
    tag: {
        type: String,
        default: "General"
    }
}, {timestamps: true});

// Allow multiple null values for 'description' in the unique index
NoteSchema.index({ description: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('NoteData', NoteSchema);
