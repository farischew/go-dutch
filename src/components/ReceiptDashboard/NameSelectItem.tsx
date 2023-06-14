import { useState } from "react";
import classes from "./NameSelectItem.module.css";

const NameSelectItem: React.FC<{ name: string }> = (props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const selectHandler = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={isSelected ? classes.nameItemSelected : classes.nameItem}
      onClick={selectHandler}
    >
      {props.name}
    </div>
  );
};

export default NameSelectItem;
