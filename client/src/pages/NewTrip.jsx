import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { createTrip } from "../features/trips/tripSlice";
import { reset } from "../features/trips/tripSlice";
import "../styles/NewTrip.css";

// const schema = yup.object().shape({
//   tripName: yup.string().required(),
//   destination: yup.string().required(),
//   dates: yup.string().required(),
//   categories: yup.boolean(true),
// });

function NewTrip() {
  // const {
  //   register,
  //   formState: { errors },
  //   reset,
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  // const [tripName, setTripName] = useState("");
  // const [destination, setDestination] = useState("");
  // const [dates, setDates] = useState("");
  // const [categories, setCategories] = useState(true);

  const [formData, setFormData] = useState({
    tripName: "",
    destination: "",
    dates: "",
  });

  const { tripName, destination, dates } = formData;

  const [categories, setCategories] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isToggled, setIsToggled] = useState(true);

  const { trip, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.trip
  );

  useEffect(() => {
    if (isToggled === true) {
      setCategories(true);
    } else {
      setCategories(false);
    }

    if (isSuccess) {
      navigate("/");
    }

    dispatch(reset);
  }, [isToggled, trip, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const tripData = {
      tripName,
      destination,
      dates,
      categories,
    };
    // const formData = new FormData();
    // formData.append("tripName", tripName);
    // formData.append("destination", destination);
    // formData.append("dates", dates);
    // formData.append("categories", categories);
    // console.log("form data", formData);

    dispatch(createTrip(tripData));
  };

  return (
    <div className="container">
      <div className="newTrip">
        <div className="ntHeader">
          <h1>Create a new trip</h1>
        </div>
        <form className="nameTrip" onSubmit={onSubmit}>
          <div className="formRow">
            <label htmlFor="tripName">Name your trip</label>
            <input
              type="text"
              name="tripName"
              placeholder="Summer Getaway"
              value={tripName}
              onChange={onChange}
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
              onChange={onChange}
            ></input>
            {/* <p>{errors.destination?.message}</p> */}
          </div>

          <div className="formRow">
            <label for="dates">Dates of the trip</label>
            <input
              type="text"
              name="dates"
              placeholder="July 28-31, 2022"
              value={dates}
              onChange={onChange}
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
            <button id="createTrip" type="submit">
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
