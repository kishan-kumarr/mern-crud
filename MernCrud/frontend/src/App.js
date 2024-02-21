import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import AddEditUser from "./component/AddEditUser";
import ViewUser from "./component/ViewUser";
import NotFound from "./component/NotFound";
import "./App.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-user" element={<AddEditUser />} />
        <Route exact path="/update-user/:id" element={<AddEditUser />} />
        <Route exact path="/view-user/:id" element={<ViewUser />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
