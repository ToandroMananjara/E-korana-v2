function PopUpPasswordIncorrect({ orderPop, setOrderPopUp }) {
  return (
    <div className="p-7 w-full flex justify-center  absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] z-10 ">
      <div className="bg-grey-bg-secondary px-7 py-10 rounded-[15px]">
        <h1 className="text-xl">Incorrect password</h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur, cupiditate, voluptatibus quis
        </p>
        <div className="flex justify-center">
          <span
            className="cursor-pointer"
            onClick={() => {
              setOrderPopUp(!orderPop);
            }}
          >
            Ok
          </span>
        </div>
      </div>
    </div>
  );
}
export default PopUpPasswordIncorrect;
