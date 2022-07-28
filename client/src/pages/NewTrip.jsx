import React from "react";
import { useEffect, useState } from "react";
import { FaBed } from "react-icons/fa";
import { TbHanger } from "react-icons/tb";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdOutdoorGrill } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
import { MdFlashlightOn } from "react-icons/md";
import { FaHiking } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { BiSwim } from "react-icons/bi";
import Toggle from "../components/Toggle";
import axios from "axios";
import "../styles/NewTrip.css";

function NewTrip() {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [categories, setCategories] = useState(true);

  const [isToggled, setIsToggled] = useState(true);

  useEffect(() => {
    if (isToggled === true) {
      setCategories(true);
    } else {
      setCategories(false);
    }
  }, [isToggled]);

  const createTrip = () => {
    axios
      .post("http://localhost:8000/trip/", {
        tripName,
        destination,
        dates,
        categories,
      })
      .then((response) => {
        alert("Trip Created!");
      });
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   const tripData = {
  //     tripName,
  //     destination,
  //     dates,
  //     categories,
  //   };
  // };

  return (
    <div className="container">
      <div className="newTrip">
        <div className="ntHeader">
          <h1>Create a new trip</h1>
        </div>
        <form className="nameTrip">
          <div className="formRow">
            <label htmlFor="tripName">Name your trip</label>
            <input
              type="text"
              name="tripName"
              placeholder="Summer Getaway"
              value={tripName}
              onChange={(e) => {
                setTripName(e.target.value);
              }}
            ></input>
            {/* <p>{errors.tripName?.message}</p> */}
          </div>

          <div className="formRow">
            <label for="destination">Where are you going?</label>
            <input
              type="text"
              name="destination"
              placeholder="Algonquin"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
            ></input>
            {/* <p>{errors.destination?.message}</p> */}
          </div>

          <div className="formRow">
            <label for="dates">Dates of the trip</label>
            <input
              type="text"
              name="dates"
              placeholder="August 10-14, 2022"
              value={dates}
              onChange={(e) => {
                setDates(e.target.value);
              }}
            ></input>
            {/* <p>{errors.dates?.message}</p> */}
          </div>

          <div className="formRowToggle">
            <div className="formRowCheck">
              <label>Add recommended categories to your packing list</label>
              <p>categories can be added or removed later</p>
            </div>
            <div className="formRowCheck">
              <Toggle
                rounded={true}
                isToggled={isToggled}
                onToggle={() => {
                  setIsToggled(!isToggled);
                }}
              />
            </div>
          </div>

          <div className="categories" id={isToggled ? "active" : "inactive"}>
            <div className="iconBox">
              <FaBed size={40} />
              <h4>SLEEPING</h4>
            </div>
            <div className="iconBox">
              <TbHanger size={40} />
              <h4>CLOTHING</h4>
            </div>
            <div className="iconBox">
              <RiFirstAidKitFill size={30} />
              <h4>FIRST-AID</h4>
            </div>
            <div className="iconBox">
              <MdOutdoorGrill size={40} />
              <h4>KITCHEN</h4>
            </div>
            <div className="iconBox">
              <FaUtensils size={30} />
              <h4>COOKING</h4>
            </div>
            <div className="iconBox">
              <FaHandsWash size={40} />
              <h4>TOILETRIES</h4>
            </div>
            <div className="iconBox">
              <MdFlashlightOn size={40} />
              <h4>TOILETRIES</h4>
            </div>
            <div className="iconBox">
              <FaHiking size={35} />
              <h4>HIKING</h4>
            </div>
            <div className="iconBox">
              <FaHammer size={35} />
              <h4>TOOLS</h4>
            </div>
            <div className="iconBox">
              <BiSwim size={40} />
              <h4>SWIMMING</h4>
            </div>
          </div>

          <div className="buttons">
            <button id="createTrip" type="submit" onClick={createTrip}>
              CREATE TRIP
            </button>
            <button id="cancelTrip">CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTrip;
