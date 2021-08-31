const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log("Mongodb Connected...");
  } catch (e) {
    console.error(e.message);
    //Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
