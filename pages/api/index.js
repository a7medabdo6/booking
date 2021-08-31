const connectDB = require("../../config/db");
import Booking from "../../models/Booking";

const handler = async (req, res) => {
  connectDB();

  if (req.method === "POST") {
    // Check if name, email or password is provided
    const { name, id_number, date, hour, completed } = req.body;
    console.log(name, id_number);
    if ((name && id_number && date, hour)) {
      try {
        // Hash password to store it in DB
        var booking = new Booking({
          name,
          id_number,
          completed,
          date,
          hour,
        });
        // Create new user
        var Bookingcreated = await booking.save();
        return res.status(200).send(Bookingcreated);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    var ListOfAppointments = await Booking.find({});
    console.log(ListOfAppointments);
    res.status(200).send(ListOfAppointments);
  }
};

export default handler;
