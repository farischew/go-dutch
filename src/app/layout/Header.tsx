import classes from "./Header.module.css";

const Header = (props: any) => {
  return (
    <div className={classes.header}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
