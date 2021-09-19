import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  hotel: {
    type: String,
    required: [true, 'A hotel must have a name'],
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'A hotel ust have an address'],
  },
  starRating: {
    type: Number,
    default: 4.5,
  },
  imageCover: {
    type: String,
    required: [true, 'A hotel must have a cover image'],
  },
  description: {
    type: String,
    trim: true,
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
