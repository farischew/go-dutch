import { useContext, useState } from "react";
import classes from "./NameSelectField.module.css";
import NameSelectItem from "./NameSelectItem";
import ReceiptContext from "@/store/receipt-context";

interface FinalItem {
  price: number;
  people: string[];
}

const SelectList: React.FC<{
  nameList: string[];
  itemName: string;
  onClose: () => void;
}> = (props) => {
  const ctx = useContext(ReceiptContext);

  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const selectHandler = (name: string) => {
    if (selectedNames.includes(name)) {
      setSelectedNames(selectedNames.filter((item) => item !== name));
    } else {
      setSelectedNames([...selectedNames, name]);
    }
  };

  const onSaveHandler = () => {
    const currentItemObj = (ctx.finalOutput as { [key: string]: FinalItem })[
      props.itemName
    ];

    currentItemObj.people = selectedNames;

    props.onClose();
  };

  return (
    <div className={classes.namelist}>
      <ul className={classes.namelistitems}>
        {props.nameList.map((name) => (
          <li key={name} onClick={() => selectHandler(name)}>
            <NameSelectItem name={name} />
          </li>
        ))}
      </ul>
      <button onClick={onSaveHandler} className={classes.button}>
        Save
      </button>
    </div>
  );
};

export default SelectList;
