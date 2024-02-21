import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewUser = () => {
  const [userProfile, setUserProfile] = useState({});
  let { id } = useParams();

  const getSingleUser = async () => {
    const res = await axios.get(`http://localhost:5000/api/user/${id}`);
    res.status === 202 && setUserProfile(res.data.data);
  };

  useEffect(() => {
    getSingleUser();
  }, [id]);

  return (
    <div className="container">
      <br />
      <br />
      <div className="card text-center">
        <div className="card-header">{userProfile && userProfile.email}</div>
        <div className="card-body">
          <h5 className="card-title">{userProfile && userProfile.name}</h5>
          <p className="card-text">{userProfile && userProfile.phone}</p>
          <Link to="/" className="btn btn-sm btn-primary">
            Home
          </Link>
        </div>

        <div className="card-footer text-muted">User Profile</div>
      </div>
    </div>
  );
};

export default ViewUser;
