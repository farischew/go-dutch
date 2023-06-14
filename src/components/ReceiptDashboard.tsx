import Container from "@/UI/Container";
import ActionBar from "@/app/layout/ActionBar";
import ReceiptItem from "./ReceiptDashboard/ReceiptItem";

import Header from "@/app/layout/Header";
import ReceiptModal from "./ReceiptDashboard/ReceiptModal";
import { useEffect, useState, useContext } from "react";
import ReceiptContext from "@/store/receipt-context";

const GET_URL = "https://go-dutch-backend.herokuapp.com/see_people";

interface FinalItem {
  price: number;
  people: [];
}

const ReceiptDashboard: React.FC<{
  onContinue: () => void;
  onBack: () => void;
}> = (props) => {
  const ctx = useContext(ReceiptContext);

  // Receipt Modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedReceipt, setSelectedReceipt] = useState<
    | {
        item: string;
        price: number;
      }
    | undefined
  >();

  const modalCloseHandler = () => {
    checkInputsValidation();
    setShowModal(false);
  };

  const openReceiptHandler = (key: number) => {
    setSelectedReceipt(ctx.items[key]);

    setShowModal(true);
  };

  // Get User Names
  const [loadedNames, setLoadedNames] = useState<string[]>([]);

  // Function to get name list from API
  const getPeopleHandler = async () => {
    const response = await fetch(GET_URL, {
      method: "GET",
    });

    const data = await response.json();

    setLoadedNames(data);
  };

  useEffect(() => {
    getPeopleHandler();
  }, []);

  // Check if all name fields are completed
  const [namesValid, setNamesValid] = useState(false);

  const checkInputsValidation = () => {
    (Object.values(ctx.finalOutput) as FinalItem[]).forEach(
      (item: FinalItem) => {
        const peopleArray = item.people;
        if (peopleArray === undefined || peopleArray.length === 0) {
          setNamesValid(false);
          return;
        } else {
          setNamesValid(true);
        }
      }
    );
  };

  return (
    <>
      <Header title={"Receipt Dashboard"} />
      <Container>
        <ul>
          {ctx.items.map((item: { item: string; price: number }, key) => (
            <li key={item.item} onClick={(event) => openReceiptHandler(key)}>
              <ReceiptItem name={item.item} price={item.price} />
            </li>
          ))}
        </ul>
        {showModal && (
          <ReceiptModal
            showModal={showModal}
            onClose={modalCloseHandler}
            selectedReceipt={selectedReceipt}
            loadedNames={loadedNames}
          />
        )}
      </Container>
      <ActionBar
        onContinue={props.onContinue}
        onBack={props.onBack}
        display={namesValid}
      />
    </>
  );
};

export default ReceiptDashboard;
