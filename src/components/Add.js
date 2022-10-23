import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Student</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Student"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
