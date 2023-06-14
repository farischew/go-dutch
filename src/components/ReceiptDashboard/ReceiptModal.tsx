import { useEffect } from "react";

import SelectList from "./NameSelectField";
import classes from "./ReceiptModal.module.css";
import ReactPortal from "./ReactPortal";
import ReceiptItem from "./ReceiptItem";
import Container from "@/UI/Container";

const ReceiptModal: React.FC<{
  showModal: boolean;
  selectedReceipt:
    | {
        item: string;
        price: number;
      }
    | undefined;
  loadedNames: string[];
  onClose: () => void;
}> = (props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [props.showModal]);

  if (!props.showModal) {
    return null;
  }

  return (
    <ReactPortal wrapperId="react-portal-receipt-modal">
      <Container>
        <div className={classes.modal}>
          {props.selectedReceipt && (
            <>
              <ReceiptItem
                name={props.selectedReceipt.item}
                price={props.selectedReceipt.price}
              />
              <SelectList
                nameList={props.loadedNames}
                itemName={props.selectedReceipt.item}
                onClose={props.onClose}
              />
            </>
          )}
        </div>
      </Container>
    </ReactPortal>
  );
};

export default ReceiptModal;
