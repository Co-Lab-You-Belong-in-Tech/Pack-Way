import React from "react";
import { useNavigate } from "react-router-dom";
import trip from "../assets/illustrations/Trip-rafiki.svg";
import { FiCheckCircle } from "react-icons/fi";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="pwContainer">
        <h1>Pack-Way</h1>
        <h3>
          Make planning for group camping trips as easy as one, two,
          marshmallow.
        </h3>
        <div className="bulletPoints">
          <div className="bpRow">
            <FiCheckCircle size={20} />
            <p>Build packing lists based on your destination.</p>
          </div>
          <div className="bpRow">
            <FiCheckCircle size={20} />
            <p>Easily invite friends and plan trips together.</p>
          </div>
          <div className="bpRow">
            <FiCheckCircle size={20} />
            <p>Never ask "Who's bringing what?" again.</p>
          </div>
        </div>
        <img src={trip} alt=""></img>
        <div className="buttons">
          <button
            id="createBtn"
            onClick={() => {
              navigate("/newtrip");
            }}
          >
            CREATE A NEW TRIP
          </button>
          <button id="joinBtn">JOIN A FRIEND'S TRIP</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
