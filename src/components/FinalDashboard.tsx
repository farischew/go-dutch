import Container from "@/UI/Container";
import Header from "@/app/layout/Header";
import ReceiptContext from "@/store/receipt-context";
import { useContext, useEffect, useState } from "react";
import FinalDashboardList from "./FinalDashboard/FinalDashboardList";
import ConfirmationBar from "@/app/layout/ConfirmationBar";

const GET_FINAL_URL = "https://go-dutch-backend.herokuapp.com/items_splits";

const FinalDashboard: React.FC<{
  onContinue: () => void;
  onBack: () => void;
}> = (props) => {
  const ctx = useContext(ReceiptContext);

  const [finalOutput, setFinalOutput] = useState({});

  // Fetching Item Split Data
  const getFinalItemsHandler = async () => {
    const finalObj = ctx.finalOutput;
    console.log(finalObj);

    const response = await fetch(GET_FINAL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalObj),
    });

    const data = await response.json();

    setFinalOutput(data);
    console.log(data);
  };

  useEffect(() => {
    getFinalItemsHandler();
  }, []);

  return (
    <>
      <Header title={"Confirm your Split"} />
      <Container>
        <FinalDashboardList finalSplit={finalOutput} />
      </Container>
      <ConfirmationBar onBack={props.onBack} />
    </>
  );
};

export default FinalDashboard;
