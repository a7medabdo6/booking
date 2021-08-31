const connectDB = require("../../config/db");
import Booking from "../../models/Booking";

export default async function handler(req, res) {
  connectDB();

  if (req.method === "POST") {
    const update = { completed: true };

    var booking = await Booking.findByIdAndUpdate({ _id: req.body.id }, update);

    res.status(200).json(booking);
  }
}
