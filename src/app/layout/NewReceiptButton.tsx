import BackButton from "@/UI/BackButton";
import classes from "./ActionBar.module.css";
import Button from "@/UI/Button";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

const NewReceiptButton: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <Button onClick={props.onClick}>New Receipt</Button>
      </div>
    </div>
  );
};

export default NewReceiptButton;
