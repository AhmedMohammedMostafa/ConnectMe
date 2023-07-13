import mongoose from 'mongoose'

const SubscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email'
    ]
  },
    createdAt: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.models.User || mongoose.model('Subscribe', SubscribeSchema)