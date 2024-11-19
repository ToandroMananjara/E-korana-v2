import { FourSquare } from "react-loading-indicators";

function Loading() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
      <FourSquare color="#027AFF" size="medium" text="" textColor="" />
    </div>
  );
}
export default Loading;
