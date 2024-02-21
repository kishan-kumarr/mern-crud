import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container-fluid col-md-10 mt-5">
      <div className="card">
        <div className="card-header bg-dark text-white">About Us</div>
        <div className="card-body">
          <h5 className="card-title">We Are Mern Developer</h5>
          <hr></hr>
          <p className="card-text">
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <Link to="/" className="btn btn-sm btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
