import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const CreateLeave = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [daysOff, setDaysOff] = useState("");
  const [date, setDate] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [workHours, setWorkHours] = useState("");
  const [offHours, setoffHours] = useState("");
  const [presentStatus, setPresentStatus] = useState("");

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTimeIn = (e) => {
    setTimeIn(e.target.value);
  };

  const onChangeTimeOut = (e) => {
    setTimeOut(e.target.value);
  };

  const leaveHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/leaves/create", {
        empId,
        empName,
        daysOff,
        date,
        timeIn,
        timeOut,
        workHours,
        offHours,
        presentStatus,
      });
      alert("Leave Added Successfully");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <form className="container" onSubmit={leaveHandler}>
        <div class="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Employee Id"
            onChange={(e) => setEmpId(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your id with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Employee Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Employee Name"
            onChange={(e) => setEmpName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            onChange={onChangeDate}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Time In</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputPassword1"
            onChange={onChangeTimeIn}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Time Out</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputPassword1"
            onChange={onChangeTimeOut}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Work Hours</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setWorkHours(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Off Hours</label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setoffHours(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Day Off</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setDaysOff(e.target.value)}
          />
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            H-Day
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Duty Leave
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateLeave;
