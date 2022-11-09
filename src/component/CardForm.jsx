import React, { useState, useRef } from "react";

function CardForm({ infos, onSubmit, changeHandler }) {
  const regex = /^\d{16}$/;

  const inputCardHolderName = useRef(null);
  const inputCardNumber = useRef(null);
  const inputCardExpirationMonth = useRef(null);
  const inputCardExpirationYear = useRef(null);
  const inputCardVerificationCode = useRef(null);

  const [cardHolderError, setCardHolderError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardExpMonthError, setCardExpMonthError] = useState("");
  const [cardExpYearError, setCardExpYearError] = useState("");
  const [cvcError, setCvcError] = useState("");

  const validateAndSubmit = (event) => {
    let errors = 0;

    if (infos.holder.trim().length === 0) {
      errors++;
      setCardHolderError("Can't be blank");
    } else {
      setCardHolderError("");
    }

    if (infos.number.length === 0) {
      errors++;
      setCardNumberError("Can't be blank.");
    } else if (infos.number.length < 16) {
      errors++;
      setCardNumberError("Invalid card number");
    } else if (!regex.test(infos.number)) {
      errors++;
      setCardNumberError("Wrong format, numbers only");
    } else {
      setCardNumberError("");
    }

    if (infos.expMonth.trim().length === 0) {
      errors++;
      setCardExpMonthError("Can't be blank");
    } else if (!regex.test(infos.number)) {
      errors++;
      setCardExpMonthError("Wrong format, numbers only");
    } else if (parseInt(infos.number) < 1 && parseInt(infos.number) > 12) {
      errors++;
      setCardExpMonthError("Invalid month number");
    } else {
      setCardExpMonthError("");
    }

    if (infos.expYear.trim().length === 0) {
      errors++;
      setCardExpYearError("Can't be blank");
    } else {
      setCardExpYearError("");
    }

    if (infos.cvc.trim().length === 0) {
      errors++;
      setCvcError("Can't be blank");
    } else {
      setCvcError("");
    }

    console.log(errors);

    onSubmit(errors === 0);

    event.preventDefault();
  };

  return (
    <form
      onSubmit={validateAndSubmit}
      className="mt-[49px] lg:m-0 w-[327px] lg:w-[380px]"
    >
      <div className="grid grid-cols-4 gap-[20px]">
        {/* CARDHOLDER NAME */}
        <div className="col-span-4 flex flex-col gap-[9px]">
          <label htmlFor="card-holder" className="block text-xs">
            Cardholder Name
          </label>
          <input
            ref={inputCardHolderName}
            id="card-holder"
            type="text"
            placeholder={infos.holder ? infos.holder : "e.g. Jane Appleseed"}
            onChange={(e) => {
              changeHandler((prev) => {
                return {
                  ...prev,
                  holder: inputCardHolderName.current.value.trim(),
                };
              });
            }}
            className="w-full px-4 py-3 border-solid border-[1px] border-darkGrayishViolet outline-veryDarkViolet rounded-lg"
          />
          {cardHolderError ? (
            <p className="text-xs text-red-500">{cardHolderError}</p>
          ) : null}
        </div>

        {/* CARD NUMBER */}
        <div className="col-span-4 flex flex-col gap-[9px]">
          <label htmlFor="card-number" className="block text-xs">
            Card Number
          </label>
          <input
            ref={inputCardNumber}
            id="card-number"
            type="text"
            placeholder={
              infos.number ? infos.number : "e.g. 1234 5678 9123 0000"
            }
            onChange={(e) => {
              changeHandler((prev) => {
                return { ...prev, number: inputCardNumber.current.value };
              });
            }}
            maxLength="16"
            className="w-full px-4 py-3 border-solid border-[1px] border-darkGrayishViolet outline-veryDarkViolet rounded-lg"
          />
          {cardNumberError ? (
            <p className="text-xs text-red-500">{cardNumberError}</p>
          ) : null}
        </div>

        {/* EXP. DATE */}
        <div className="col-span-2 grid grid-cols-2 content-start items-start gap-[9px]">
          <label className="col-span-2 text-xs">Exp. date (MM/YY)</label>
          <div className="flex flex-col gap-[9px] ">
            <input
              ref={inputCardExpirationMonth}
              id="exp-date-month"
              type="text"
              placeholder={infos.expMonth ? infos.expMonth : "MM"}
              onChange={(e) => {
                changeHandler((prev) => {
                  return {
                    ...prev,
                    expMonth: inputCardExpirationMonth.current.value,
                  };
                });
              }}
              maxLength="2"
              className="px-4 py-3 border-solid border-[1px] border-darkGrayishViolet outline-veryDarkViolet rounded-lg"
            />
            {cardExpMonthError ? (
              <p className="text-xs text-red-500">{cardExpMonthError}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-[9px]">
            <input
              ref={inputCardExpirationYear}
              id="exp-date-year"
              type="text"
              placeholder={infos.expYear ? infos.expYear : "YY"}
              onChange={(e) => {
                changeHandler((prev) => {
                  return {
                    ...prev,
                    expYear: inputCardExpirationYear.current.value,
                  };
                });
              }}
              maxLength="2"
              className="px-4 py-3 border-solid border-[1px] border-darkGrayishViolet outline-veryDarkViolet rounded-lg"
            />
            {cardExpYearError ? (
              <p className="text-xs text-red-500">{cardExpYearError}</p>
            ) : null}
          </div>
        </div>

        {/* CVC */}
        <div className="col-span-2 flex flex-col gap-[9px]">
          <label htmlFor="cvc" className="block text-xs">
            CVC
          </label>
          <input
            ref={inputCardVerificationCode}
            id="cvc"
            type="text"
            placeholder={infos.cvc ? infos.cvc : "e.g. 123"}
            onChange={(e) => {
              changeHandler((prev) => {
                return {
                  ...prev,
                  cvc: inputCardVerificationCode.current.value,
                };
              });
            }}
            maxLength="3"
            className="w-full px-4 py-3 border-solid border-[1px] border-darkGrayishViolet outline-veryDarkViolet rounded-lg "
          />
          {cvcError ? <p className="text-xs text-red-500">{cvcError}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        className="inline-block w-full mt-[28px] lg:mt-[40px] py-[15px] rounded-lg text-lg outline-none bg-veryDarkViolet text-lightGrayishViolet"
      >
        Confirm
      </button>
    </form>
  );
}

export default CardForm;
