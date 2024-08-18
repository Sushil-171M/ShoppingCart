import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-primary bg-primary w-100">
      <div className="container">
        <div className="row m-auto">
          <i className="fa fa-hand-pointer-o fa-2x text-white mr-2" />
          <div className="text-light h2" data-testid="title">
            {props.title}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
