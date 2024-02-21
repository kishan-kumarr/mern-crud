import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    const allUsers = await axios.get("http://localhost:5000/api/users");
    allUsers.status === 202 && setUsers(allUsers.data.data);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/user/${id}`);
    if (response.status === 202) {
      toast.success("User Deleted Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      fetchAllUsers();
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
      <div className="container">
        <ToastContainer />
        <br />
        <br />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">User List</h5>
            <hr />
            <Link to={"/add-user"}>
              <button className="btn btn-sm btn-success">Add User</button>
            </Link>
          </div>
          <table id="example" className="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Sr. No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <Link
                          to={`/view-user/${item._id}`}
                          className="btn btn-sm btn-info"
                          style={{ marginRight: "5px" }}
                        >
                          View
                        </Link>
                        <Link
                          to={`/update-user/${item._id}`}
                          className="btn btn-sm btn-primary"
                          style={{ marginRight: "5px" }}
                        >
                          Update
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
