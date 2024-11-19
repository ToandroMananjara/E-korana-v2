import { useState } from "react";
import { Link, useRouteError } from "react-router-dom";

function PageError() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div className="h-screen w-screen bg-white pt-[2em] px-[2em] text-black flex justify-center items-center">
        {/* Erreur {error.status} <br />
        {error.statusText} */}
        {error.data}
      </div>
    </>
  );
}

export default PageError;
