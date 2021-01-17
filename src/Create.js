import React, { useState } from "react";
import axios from "axios";
//import Nav from "./components/Nav";
const Create = () => {
  // state
  const [state, setState] = useState({
    //title: "",
    lastName: "",
    firstName: "",
    startDate: "",
    endDate: "",
    content: "",
    user: "",
  });
  // destructure values from state
  const { lastName, firstName, startDate, endDate, content, user } = state;
  //onchange event handler
  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/posts`, {
        lastName,
        firstName,
        startDate,
        endDate,
        content,
      })
      .then((response) => {
        console.log("response.data: ", response.data);
        // empty state
        setState({
          ...state,
          lastName: "",
          firstName: "",
          startDate: "",
          endDate: "",
          content: "",
        });
        // show sucess alert
        //alert(`Post from last name ${response.data.lastName} is created`);
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };

  return (
    <div className="container p-5">
      <h1>CREATE POST</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Last Name</label>
          <input
            onChange={handleChange("lastName")}
            value={lastName}
            type="text"
            className="form-control"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">First Name</label>
          <input
            onChange={handleChange("firstName")}
            value={firstName}
            type="text"
            className="form-control"
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Start Date</label>
          <input
            onChange={handleChange("startDate")}
            value={startDate}
            type="text"
            className="form-control"
            placeholder="Start Date"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">End Date</label>
          <input
            onChange={handleChange("endDate")}
            value={endDate}
            type="text"
            className="form-control"
            placeholder="End Date"
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Content</label>
          <textarea
            onChange={handleChange("content")}
            value={content}
            type="text"
            className="form-control"
            placeholder="Write some content..."
            required
          />
        </div>
        <div>
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
