import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import moment from "moment";

const DisplayLeaves = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:5000/leaves/")
        .then((res) => setData(res.data));
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Id</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Date</th>
            <th scope="col">Time In</th>
            <th scope="col">Time Out</th>
            <th scope="col">Work Hours</th>
            <th scope="col">Off Hours</th>
            <th scope="col">Days Off</th>
          </tr>
        </thead>

        {data.length === 0 ? (
          <center>
            <h1 style={{ color: "red" }}>No Data Found</h1>
          </center>
        ) : (
          data.map((value, index) => (
            <tbody key={value._id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.empId}</td>
                <td>{value.empName}</td>
                <td>{moment(value.date).format("DD MMMM, YYYY")}</td>
                <td>{moment(value.timeIn).format("HH : mm : ss")}</td>
                <td>{moment(value.timeOut).format("HH : mm : ss")}</td>
                <td>{value.workHours}</td>
                <td>{value.offHours}</td>
                <td>{value.daysOff}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default DisplayLeaves;
