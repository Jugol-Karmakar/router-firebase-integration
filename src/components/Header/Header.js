import React from "react";
import Customlink from "../../Customlink/Customlink";
import useFirebase from "../Hooks/useFirebase";

const Header = () => {
  const { user, handelSignOut } = useFirebase();
  return (
    <nav className="flex justify-center items-center py-4 bg-green-50">
      <Customlink to="/">Home</Customlink>
      <Customlink to="/register">Rigister</Customlink>
      <span className="font-semibold px-2">
        {user?.displayName && user.displayName}
      </span>
      {user?.uid ? (
        <button
          onClick={handelSignOut}
          class="rounded-full bg-cyan-500 py-2 px-5 text-white "
        >
          Sign Out
        </button>
      ) : (
        <Customlink to="/login">Login</Customlink>
      )}
    </nav>
  );
};

export default Header;
