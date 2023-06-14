import classes from "./ReceiptItem.module.css";

// import { IconButton } from "@material-tailwind/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ReceiptItem: React.FC<{ name: string; price: number }> = (props) => {
  return (
    <div className={classes.receipt_wrapper}>
      <div className={classes.receipt_item}>
        <div className={classes.receipt_item_details}>
          <h3>{props.name}</h3>
          <p>${props.price}</p>
        </div>
        <div className={classes.receipt_item_action}>
          {/* <IconButton variant="outlined">
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <IconButton variant="outlined">
            <FontAwesomeIcon icon={faPenToSquare} />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default ReceiptItem;
