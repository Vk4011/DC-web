import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63996.jpg?t=st=1717162636~exp=1717166236~hmac=5a45e6a345e1edcba31674586805aeeb6e3989a1b4cebc24a530074b9efc8e9e&w=1800')`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-[90px] font-bold mb-4">All in one cloud.</h1>
        <h2 className="text-2xl mb-4">
          Develop, train, and scale AI models with Data Care.
        </h2>
        <br />
        <Link className="inline-block outline-none cursor-pointer transition-transform transition-shadow bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-md text-md"
        to="/sidebar"
        >
          Get started &gt;
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
