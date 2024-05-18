import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";
import { login } from "../redux/actions/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  return (
    <section className="w-full h-screen bg-blue flex justify-center items-center">
      <form
        action=""
        className="w-[400px] p-[20px] bg-white rounded-lg flex flex-col gap-3"
        onSubmit={submitHandler}
      >
        <h2 className="text-4xl text-black font-bebas">Login</h2>

        <input
          type="text"
          placeholder="Enter Email"
          className="bg-zinc-100 rounded-md p-[12px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          className="bg-zinc-100 rounded-md p-[12px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue border-none outline-none p-[10px] text-white rounded-lg">
          Login
        </button>

        <p className="text-center text-text text-sm">
          Dont have account here?{" "}
          <Link className="text-blue font-[600]" href="/register">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
