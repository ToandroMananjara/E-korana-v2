import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

function InscriptionGenre({ formData, setFormData, handleChange }) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/register/email");
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em]  px-[2em] text-black">
        <ButtonBack link={"/register/date-of-birth"} />
        <h1 className="text-[30px] font-medium my-[0.5em]">
          What’s your gender?
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="genre-input mb-[1em] bg-grey-bg-secondary rounded-[15px] p-4">
            <div className="flex w-full justify-between items-center">
              <label htmlFor="male" className="text-[17px]">
                Male
              </label>
              <input
                type="radio"
                name="genre"
                id="male"
                className="w-[20px] h-[20px]"
                value="male"
                checked={formData.genre === "male"}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full justify-between items-center my-2 ">
              <label htmlFor="female" className="text-[17px]">
                Female
              </label>
              <input
                type="radio"
                name="genre"
                id="female"
                className="w-[20px] h-[20px]"
                value="female"
                checked={formData.genre === "female"}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <label htmlFor="other" className="text-[17px]">
                Other Option
              </label>
              <input
                type="radio"
                name="genre"
                id="other"
                className="w-[20px] h-[20px]"
                value="other"
                checked={formData.genre === "other"}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button
            type={"submit"}
            // link={"/register/email"}
            contenu={"Next"}
          />
        </form>
      </div>
    </>
  );
}

export default InscriptionGenre;
