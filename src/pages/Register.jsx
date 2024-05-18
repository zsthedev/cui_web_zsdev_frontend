import React from "react";
import Select from "react-select";
const Register = () => {
  return (
    <section className="w-full h-screen bg-blue flex justify-center items-center">
      <form
        action=""
        className="w-[400px] p-[20px] bg-white rounded-lg flex flex-col gap-3"
      >
        <h2 className="text-4xl text-black font-bebas">Register</h2>
        <input
          type="text"
          placeholder="Enter Name"
          className="bg-zinc-100 rounded-md p-[12px]"
        />
        <input
          type="text"
          placeholder="Enter Email"
          className="bg-zinc-100 rounded-md p-[12px]"
        />
        <Select placeholder="Choose Role" />
        <input
          type="text"
          placeholder="Enter Password"
          className="bg-zinc-100 rounded-md p-[12px]"
        />
        <button className="w-full bg-blue border-none outline-none p-[10px] text-white rounded-lg">
          Register
        </button>

        <p className="text-center text-text text-sm">Already Have Account? <a className="text-blue font-[600]" href="/login">Login</a></p>
      </form>
    </section>
  );
};

export default Register;
