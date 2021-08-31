import mongoose from "mongoose";
var Schema = mongoose.Schema;

var Booking = new Schema({
  name: {
    type: String,
    required: true,
  },
  id_number: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    required: true,
  },
  hour: [
    {
      type: String,
      required: true,
    },
  ],
});

mongoose.models = {};

var User = mongoose.model("Booking", Booking);

export default User;
