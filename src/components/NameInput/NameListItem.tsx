import classes from "./NameListItem.module.css";

const NameListItem: React.FC<{ name: string }> = (props) => {
  return <div className={classes.nameItem}>{props.name}</div>;
};

export default NameListItem;
