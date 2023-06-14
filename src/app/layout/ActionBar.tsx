import Button from "@/UI/Button";

import classes from "./ActionBar.module.css";
import BackButton from "@/UI/BackButton";

const ActionBar = (props: any) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <BackButton onClick={props.onBack}>Back</BackButton>
        <Button onClick={props.onContinue} display={props.display}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
