import React from "react";
import completeIcon from "../assets/icon-complete.svg";

function SuccessMessage({ onContinue }) {
  return (
    <div className="mt-[49px] lg:m-0 w-[327px] lg:w-[380px] mx-auto">
      <img
        src={completeIcon}
        alt="Success"
        className="mx-auto w-[80px] h-[80px]"
      />
      <div className="w-full mt-[35px] w-full text-center">
        <h2 className="text-[28px] tracking-[4px] uppercase text-veryDarkViolet">
          Thank You!
        </h2>
        <p className="mt-[18px] text-[16px] tracking-[1px] text-darkGrayishViolet">
          We've added your card details
        </p>
      </div>
      <button
        onClick={() => onContinue()}
        className="block w-full mt-[50px] py-[15px] rounded-lg text-lg outline-none bg-veryDarkViolet text-lightGrayishViolet"
      >
        Continue
      </button>
    </div>
  );
}

export default SuccessMessage;
