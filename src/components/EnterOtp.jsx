import { useState } from "react";
import enterOtpBg from "../assets/enterOtpBg.svg";
import { Link } from "react-router-dom";
import Button from "./Button";
import ButtonBack from "./ButtonBack";

function EnterOtp() {
  const [fieldOtps, setFieldOtps] = useState(new Array(4).fill(""));
  function handleChange(e, index) {
    if (isNaN(e.target.value)) {
      return false;
    }
    setFieldOtps([
      ...fieldOtps.map((data, indx) =>
        indx === index ? e.target.value : data
      ),
    ]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    console.log(fieldOtps);
  }
  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em] px-[2em] text-black">
        <ButtonBack link={"/forgot/"} />
        <div className="mt-4 w-full flex justify-center">
          <img src={enterOtpBg} alt="" />
        </div>
        <h1 className="text-[30px] font-medium my-[0.5em]">Enter OTP</h1>
        <p className="text-[17px]">
          An 4 digit code has been sent to your mail
        </p>
        <form action="">
          <div className="name-input  flex items-center justify-center gap-x-5 my-6">
            {fieldOtps.map((fieldOtp, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  name=""
                  maxLength={1}
                  className="w-[50px] h-[70px] bg-grey-bg-secondary rounded-[15px] outline-none text-center"
                  value={fieldOtp}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              );
            })}
          </div>

          <Button
            type={"submit"}
            link={"/forgot/reset-password"}
            contenu={"Submit"}
          />
        </form>
      </div>
    </>
  );
}

export default EnterOtp;
