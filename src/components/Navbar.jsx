import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center ">
      <p className="logo text-3xl font-bebas text-black">
        Study<span className="text-blue font-bebas">AI</span>
      </p>

      <div className="auth flex gap-5">
        <Link className="w-[120px] h-[45px] border flex justify-center items-center rounded-full font-poppins">
          Register
        </Link>
        <Link className="w-[120px] h-[45px] border flex justify-center items-center rounded-full font-poppins">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
