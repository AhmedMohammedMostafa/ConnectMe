import dbConnect from '@/lib/dbConnect';
import mongoose from 'mongoose';

// Check if the Subscribe model is already defined
const Subscribe = mongoose.models.Subscribe
  ? mongoose.model('Subscribe')
  : mongoose.model('Subscribe', new mongoose.Schema({
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
    }));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Get the email from the request body
  const { email } = req.body;

  try {
    // Connect to the MongoDB database
    await dbConnect();

    // Check if the email already exists
    const existingSubscriber = await Subscribe.findOne({ email });
    if (existingSubscriber) {
      res.status(444).json({ message: 'Email is already subscribed' });
      return;
    }

    // Create a new subscriber
    const subscriber = await Subscribe.create({ email });

    // Return a success message
    res.status(200).json({ message: 'Successfully subscribed to the newsletter' });
    console.log(subscriber.email + ' subscribed to the newsletter');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while subscribing to the newsletter' });
    console.log("Error in subscribe.js");
  }
}
