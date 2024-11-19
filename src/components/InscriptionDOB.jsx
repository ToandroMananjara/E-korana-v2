import { useState } from "react";
import ArrowPointingLeft from "../assets/ArrowPointingLeft.svg";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

function InscriptionDOB({ handleChange, setFormData, formData }) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate("/register/genre");
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em]  px-[2em] text-black">
        <ButtonBack link={"/register/"} />
        <h1 className="text-[30px] font-medium my-[0.5em]">
          What’s your date of birthday ?
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="dob-input mb-[1em]">
            <label htmlFor="dob" className="text-[17px]">
              Date of Birthday
            </label>
            <br />
            <input
              type="date"
              name="dob"
              id="dob"
              className="form-input h-[50px] w-full border-grey-secondary border-[1px] rounded-[15px] mt-1 p-2 outline-none"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type={"submit"}
            // link={"/register/genre"}
            contenu={"Next"}
          />
        </form>
      </div>
    </>
  );
}

export default InscriptionDOB;
