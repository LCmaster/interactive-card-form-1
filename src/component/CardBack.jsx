import React from "react";

function CardBack({ cvc = "" }) {
  return (
    <div className="ml-auto shadow-2xl lg:ml-[96px] w-[285px] h-[156px] lg:w-[447px] lg:h-[245px] pt-[65px] pr-[28px] lg:pt-[101px] lg:pr-[43px] rounded-[4px] overflow-none bg-card-back bg-no-repeat bg-contain">
      <p className="ml-auto px-[10px] py-[5px] lg:px-[20px] lg:py-[10px] text-[10px] lg:text-[15px] tracking-widest text-white text-right">
        {cvc.padEnd(3, "0")}
      </p>
    </div>
  );
}

export default CardBack;
