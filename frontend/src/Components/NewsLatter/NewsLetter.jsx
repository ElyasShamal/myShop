import React from "react";
import "./Newsletter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers</h1>
      <p>Subscribe To Our News Letter</p>
      <div>
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
