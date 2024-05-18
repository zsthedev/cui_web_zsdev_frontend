import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [home, setHome] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      setHome(false);
    }
  }, []);
  return (
    <section
      className={`${
        home ? "visible" : "hidden"
      } w-full min-h-screen bg-white flex flex-col justify-center items-center gap-10`}
    >
      <div className="text-container flex flex-col gap-3 items-center mt-10">
        <h1 className="text-6xl font-bebas">
          Welcome to Study<span className="text-blue">AI</span>
        </h1>
        <p className="text-base font-poppins text-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          repellat velit rerum delectus et nulla!
        </p>

        <Link className="w-[150px] h-[50px] border flex justify-center items-center rounded-full font-poppins hover:bg-blue hover:border-white hover:text-white">
          Get Started
        </Link>
      </div>

      <div className="videos-cotnainer h-[550px] mb-10 bg-red-500 w-[75%] flex justify-between rounded-lg overflow-hidden">
        <div className="col w-[40%] h-full bg-text rounded-lg"></div>
        <div className="col w-[58%] h-full bg-text rounded-lg"></div>
      </div>
    </section>
  );
};

export default Home;
