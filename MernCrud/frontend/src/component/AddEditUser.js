import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AddEditUser = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const addUser = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/user",
      inputVal
    );

    if (response.status === 201) {
      toast.success("New user addedd", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  };

  const updateUser = async (id) => {
    const response = await axios.put(
      `http://localhost:5000/api/user/${id}`,
      inputVal
    );

    if (response.status === 202) {
      toast.success("User updated", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    id ? updateUser(id) : addUser();
  };

  const getSingleUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/user/${id}`);
    setInputVal(res.data.data);
  };

  useEffect(() => {
    id && getSingleUser();
  }, []);

  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">
            {id ? "Update" : "Add"} User
          </h5>
          <hr />
        </div>
        <form className="container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter your name"
              required={true}
              value={inputVal.name}
              onChange={handleInputs}
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required={true}
              value={inputVal.email}
              onChange={handleInputs}
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your phone number"
              maxLength={10}
              minLength={10}
              required={true}
              onChange={handleInputs}
              value={inputVal.phone}
              name="phone"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            {id ? "Update" : "Add User"}
          </button>
          <Link to={"/"}>
            <button type="submit" className="btn btn-danger">
              Cancel
            </button>
          </Link>
        </form>
        <br />
      </div>
    </div>
  );
};

export default AddEditUser;
