const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Leave = new Schema({
  empId: {
    unique: true,
    type: String,
  },
  empName: String,
  date: Date,
  timeIn: Date,
  timeOut: Date,
  workHours: Number,
  offHours: Number,
  daysOff: String,
  presentStatus: String,
});

const newLeave = mongoose.model("leave" , Leave);
module.exports = newLeave;
