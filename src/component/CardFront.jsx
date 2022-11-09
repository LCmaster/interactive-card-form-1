import React from "react";
import cardLogo from "../assets/card-logo.svg";

function CardFront({ infos }) {
  const formatCardNumber = (num) => {
    const parts = [];
    for (let i = 0; i < num.length; i += 4) {
      parts.push(num.slice(i, i + 4));
    }
    return parts.join(" ");
  };

  return (
    <div className="-mt-[63px] shadow-2xl lg:m-0 w-[285px] h-[156px] lg:w-[447px] lg:h-[245px] px-[20px] py-[18px] lg:px-[32px] lg:py-[26px] flex flex-col justify-between rounded-[4px] overflow-none bg-card-front bg-no-repeat bg-contain">
      <img
        src={cardLogo}
        alt="Logo"
        className="w-[54px] h-[30px] lg:w-[84px] lg:h-[47px]"
      />

      <div className="grid grid-cols-2 gap-[15px] lg:gap-[25px] text-[10px] lg:text-[14px] tracking-widest">
        <p className="col-span-2 text-white text-[18px] lg:text-[28px]">
          {formatCardNumber(infos.number.padEnd(16, "0"))}
        </p>
        <p className="uppercase text-white">
          {infos.holder ? infos.holder : "Jane Appleseed"}
        </p>
        <p className="text-white text-right">
          {infos.expMonth ? infos.expMonth : "00"}/
          {infos.expYear ? infos.expYear : "00"}
        </p>
      </div>
    </div>
  );
}

export default CardFront;
