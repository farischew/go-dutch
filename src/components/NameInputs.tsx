import Container from "@/UI/Container";

import useInput from "@/app/hooks/use-input";
import ActionBar from "@/app/layout/ActionBar";
import Header from "@/app/layout/Header";
import NameList from "./NameInput/NameList";

import classes from "./NameInputs.module.css";
import { useState } from "react";

const ADD_URL = "https://go-dutch-backend.herokuapp.com/add_people";
const GET_URL = "https://go-dutch-backend.herokuapp.com/see_people";

const NameInputs: React.FC<{ onContinue: () => void; onBack: () => void }> = (
  props
) => {
  const [nameSaved, setNameSaved] = useState(false);

  // Name List State
  const [nameList, setNameList] = useState<string[]>([]);

  // Validation States for Name Input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value: any) => value.trim() !== "");

  // Name Input Form Functions
  function addName(name: string): void {
    setNameList([...nameList, name]);
  }

  const addNameHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (enteredName && enteredNameIsValid) {
      addName(enteredName);
      resetNameInput();
    }

    setNameSaved(false);
  };

  // Function to send Name List to API
  const addPeopleHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    const response = await fetch(ADD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nameList),
    });

    const data = await response.json();

    setNameSaved(true);
  };

  return (
    <>
      <Header title={"Add your friends"} />
      <Container>
        <div className={classes.namefield}>
          <div className={classes.namelist}>
            <NameList nameList={nameList} />
          </div>
          <div className={classes.nameinput}>
            <form>
              <div className={classes.formcontrol}>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputBlurHandler}
                />
                <button
                  onClick={addNameHandler}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
              </div>
            </form>
            {!nameSaved && (
              <button className={classes.button} onClick={addPeopleHandler}>
                Save
              </button>
            )}
          </div>
        </div>
      </Container>
      <ActionBar
        onContinue={props.onContinue}
        onBack={props.onBack}
        display={nameSaved}
      />
    </>
  );
};

export default NameInputs;
