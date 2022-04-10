import React from "react";
import Customlink from "../../Customlink/Customlink";

const Header = () => {
  return (
    <nav className="flex justify-center py-4 bg-green-50">
      <Customlink to="/">Home</Customlink>
      <Customlink to="/login">Login</Customlink>
    </nav>
  );
};

export default Header;
