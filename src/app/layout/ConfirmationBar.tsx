import BackButton from "@/UI/BackButton";
import classes from "./ActionBar.module.css";
import Button from "@/UI/Button";

const CLEAR_URL = "https://go-dutch-backend.herokuapp.com/clear";

const ConfirmationBar: React.FC<{
  onBack: () => void;
}> = (props: any) => {
  function redirectToRoot() {
    window.location.href = "/"; // Replace '/' with the desired root page URL
  }

  const onConfirmHandler = async () => {
    const response = await fetch(CLEAR_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
  };

  const onNewReceipt = async () => {
    try {
      await onConfirmHandler();
      redirectToRoot();
    } catch (error) {
      redirectToRoot();
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <BackButton onClick={props.onBack}>Back</BackButton>
        <Button onClick={onNewReceipt}>New Receipt</Button>
      </div>
    </div>
  );
};

export default ConfirmationBar;
