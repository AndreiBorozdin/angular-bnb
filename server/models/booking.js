const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  startAt: {type: Date, required: "Start Date is Required"},
  endAt: {type: Date, required: "Ending Date is Required"},
  totalPrice: Number,
  days: Number,
  guests: Number,
  createdAt: {type: Date, default: Date.now},
  user: {ref: 'User', type: Schema.Types.ObjectId},
  rental: {ref: 'Rental', type: Schema.Types.ObjectId},
  payment: {type: Schema.Types.ObjectId, ref: 'Payment'},
  status: { type: String, default: 'pending'}
});


module.exports = mongoose.model('Booking', bookingSchema);
