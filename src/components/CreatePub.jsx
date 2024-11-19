import gallery from "../assets/gallery.svg";
import gift from "../assets/gift.svg";
import photoPub from "../assets/mantasoa.png";
function CreatePub({ user }) {
  return (
    <div className="rounded-[15px] border-grey-border-primary border-2 p-5 my-5 ">
      <div>
        <textarea
          type="text"
          name="pub"
          id="pub"
          className="w-full h-[50px] border-none outline-none text-[17px] my-2"
          placeholder={"Quoi de neuf, " + user}
        ></textarea>
      </div>
      <div className="mb-5 rounded-[5px] overflow-hidden">
        <img src={photoPub} alt="" />
      </div>
      <div className="w-full flex justify-between ">
        <div className="flex gap-x-4 items-center">
          <div>
            <img src={gallery} alt="" />
          </div>
          <div>
            <img src={gift} alt="" />
          </div>
        </div>
        <button className="h-[35px] bg-blue-primary text-[17px] text-primary rounded-[15px] px-5">
          Publier
        </button>
      </div>
    </div>
  );
}
export default CreatePub;
