import React, { useState } from "react";
import CardBack from "./component/CardBack";
import CardForm from "./component/CardForm";
import CardFront from "./component/CardFront";
import SuccessMessage from "./component/SuccessMessage";

function App() {
  const initialState = {
    holder: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const [cardInformations, setCardInformation] = useState(initialState);

  const [success, setSuccess] = useState(false);

  return (
    <div className="font-spaceGrotesk font-medium text-veryDarkViolet ">
      <div className="band -z-10 absolute top-0 left-0 h-[245px] lg:h-screen w-screen lg:w-[483px] bg-mobile lg:bg-desktop bg-cover bg-no-repeat bg-left-top"></div>
      <div className="mx-auto w-[327px] lg:w-auto lg:h-screen px-6 py-8 lg:px-8 flex flex-col lg:flex-row items-center lg:gap-[124px]">
        <div className="w-[327px] lg:ml-32 lg:w-auto lg:flex lg:flex-col-reverse lg:justify-end gap-[37px]">
          <CardBack cvc={cardInformations.cvc} />
          <CardFront infos={cardInformations} />
        </div>

        {success ? (
          <SuccessMessage
            onContinue={() => {
              setCardInformation(initialState);
              setSuccess(false);
            }}
          />
        ) : (
          <CardForm
            infos={cardInformations}
            changeHandler={setCardInformation}
            onSubmit={(valid) => setSuccess(valid)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
