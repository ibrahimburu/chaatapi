const mongoose = require('mongoose');

const { Schema } = mongoose;

const registerSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    surName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    pass: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});
const member = mongoose.model("member", registerSchema);

module.exports = member;
