import { useState } from "react";
import blind from "../assets/Blind.svg";
import resetPasswordBg from "../assets/resetPasswordBg.svg";
import padlock from "../assets/Padlock.svg";
import eyesOnOutlined from "../assets/eyesOnOutlined.svg";
import { Link } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import Button from "./Button";

function ResetPassword({ passView, handleShowPassword }) {
  const [confirmPassView, setConfirmPassView] = useState(false);
  const handleShowConfirmPassword = () => {
    setConfirmPassView(!confirmPassView);
  };

  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em]  px-[2em] text-black">
        <ButtonBack link={"/forgot/otp"} />
        <div className="flex justify-center mt-4">
          <img src={resetPasswordBg} alt="" />
        </div>
        <h1 className="text-[30px] font-medium mt-[0.5em]">Reset Password</h1>

        <form method="POST" action="">
          <div>
            <div className="password-input mb-[1em] flex items-center gap-2">
              <label htmlFor="password" className="text-[17px]">
                <img src={padlock} alt="" />
              </label>
              <div className="relative w-full">
                <input
                  type={passView ? "text" : "password"}
                  name="password"
                  id="newPassword"
                  placeholder="New Password"
                  className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none mt-1 p-2 "
                />
                <div
                  className="absolute right-[0.5em] top-[50%] translate-y-[-50%]"
                  onClick={handleShowPassword}
                >
                  <img src={passView ? eyesOnOutlined : blind} alt="" />
                </div>
              </div>
            </div>

            <div className="password-input mb-[1em] flex items-center gap-2">
              <label htmlFor="password" className="text-[17px]">
                <img src={padlock} alt="" />
              </label>
              <div className="relative w-full">
                <input
                  type={confirmPassView ? "text" : "password"}
                  name="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-input h-[50px] w-full border-grey-secondary border-b-[1px] outline-none mt-1 p-2 "
                />
                <div
                  className="absolute right-[0.5em] top-[50%] translate-y-[-50%]"
                  onClick={handleShowConfirmPassword}
                >
                  <img src={confirmPassView ? eyesOnOutlined : blind} alt="" />
                </div>
              </div>
            </div>
          </div>

          <Button type={"submit"} contenu={"Submit"} />
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
