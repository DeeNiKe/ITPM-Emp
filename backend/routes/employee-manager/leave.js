const router = require("express").Router();
const Leave = require("../../models/employee-manager/leave");

router.route("/create").post(async (req, res) => {
  const { empId, empName, daysOff, presentStatus } = req.body;
  const date = Date(req.body.date);
  const timeIn = Date(req.body.timeIn);
  const timeOut = Date(req.body.timeOut);

  const workHours = Number(req.body.workHours);
  const offHours = Number(req.body.offHours);

  const newLeave = new Leave({
    empId,
    empName,
    daysOff,
    presentStatus,
    date,
    timeIn,
    timeOut,
    workHours,
    offHours,
  });

  await newLeave
    .save()
    .then(() => res.status(200).json({ success: true, message: "Leave Added" }))
    .catch((err) => res.json(err));
});

router.route("/").get(async (req, res) => {
  await Leave.find().then((leaves) => res.json(leaves));
});

module.exports = router;
