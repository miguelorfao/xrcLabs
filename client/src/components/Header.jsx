import React, { Children } from "react";
import NavigationBar from "./NavigationBar";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label }) {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/SetUp");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5  mb-2 mb-lg-0 w-100 d-flex justify-content-end align-items-center gap-3">
              <Button
                label="Set up Projects"
                btnClass=" bg-primary btn"
                onClick={onclickHandler}
              />
              <button className={btnClass} onClick={onClick}>
                {label}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
