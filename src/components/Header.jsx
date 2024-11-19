import facebookMessenger from "../assets/facebookMessenger.svg";

function Header(params) {
  return (
    <header className="sticky top-0 w-full bg-white flex justify-between items-center p-5 shadow-md ">
      <div>Logo</div>
      <div className="relative bg-grey-bg-secondary w-[50px] h-[50px] flex justify-center items-center rounded-[50%]">
        <img src={facebookMessenger} alt="" />
        <span className=" absolute top-0 right-0 w-[14px] h-[14px] bg-red-primary text-[10px] text-white flex justify-center items-center rounded-[50%]">
          1
        </span>
      </div>
    </header>
  );
}
export default Header;
