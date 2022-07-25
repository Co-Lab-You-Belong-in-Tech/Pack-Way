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
import "../styles/NewTrip.css";

const schema = yup.object().shape({
  tripName: yup.string().required(),
  destination: yup.string().required(),
  categories: yup.boolean(true),
});

function NewTrip() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isToggled, setIsToggled] = useState(true);

  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="container">
      <div className="newTrip">
        <div className="ntHeader">
          <h1>Create a new trip</h1>
        </div>
        <form className="nameTrip" onSubmit={onSubmit}>
          <div className="formRow">
            <label htmlFor="tripname">Name your trip</label>
            <input
              {...register("tripname")}
              type="text"
              name="tripname"
              placeholder="Summer Getaway"
            ></input>
            <p>{errors.tripname?.message}</p>
          </div>

          <div className="formRow">
            <label for="destination">Where are you going?</label>
            <input
              {...register("desination")}
              type="text"
              name="destination"
              placeholder="Algonquin"
            ></input>
            <p>{errors.destination?.message}</p>
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
