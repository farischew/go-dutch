"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

import ImageUpload from "./ImageUpload";
import NameInputs from "./NameInputs";
import ReceiptDashboard from "./ReceiptDashboard";
import FinalDashboard from "./FinalDashboard";

// const ImageUpload = React.lazy(() => import("./ImageUpload"));
// const NameInputs = React.lazy(() => import("./NameInputs"));
// const ReceiptDashboard = React.lazy(() => import("./ReceiptDashboard"));
// const FinalDashboard = React.lazy(() => import("./FinalDashboard"));

// const ImageUpload = dynamic(() => import("./ImageUpload"), {
//   loading: () => <p>Loading...</p>,
// });
// const NameInputs = dynamic(() => import("./NameInputs"), {
//   loading: () => <p>Loading...</p>,
// });
// const ReceiptDashboard = dynamic(() => import("./ReceiptDashboard"), {
//   loading: () => <p>Loading...</p>,
// });
// const FinalDashboard = dynamic(() => import("./FinalDashboard"), {
//   loading: () => <p>Loading...</p>,
// });

const NewReceipt = () => {
  const [stage, setStage] = useState(1);

  const onContinueHandler = () => {
    setStage(stage + 1);
  };

  const onBackHandler = () => {
    setStage(stage - 1);
  };

  switch (stage) {
    case 1:
      return (
        <ImageUpload onContinue={onContinueHandler} onBack={onBackHandler} />
      );
    case 2:
      return (
        <NameInputs onContinue={onContinueHandler} onBack={onBackHandler} />
      );
    case 3:
      return (
        <ReceiptDashboard
          onContinue={onContinueHandler}
          onBack={onBackHandler}
        />
      );
    case 4:
      return (
        <FinalDashboard onContinue={onContinueHandler} onBack={onBackHandler} />
      );
    default:
    // Do Nothing
  }

  return <div>ERROR</div>;
};

export default NewReceipt;
