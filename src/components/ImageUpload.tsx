import { useContext, useState } from "react";
import { ChangeEvent } from "react";
import useInput from "@/app/hooks/use-input";

import Container from "@/UI/Container";
import ActionBar from "@/app/layout/ActionBar";
import Header from "@/app/layout/Header";

import classes from "./ImageUpload.module.css";
import ImageUploadForm, {
  NoPreviewOutput,
  PreviewOutput,
} from "./ImageUpload/ImageUploadForm";
import ReceiptContext from "@/store/receipt-context";

interface FinalOutput {
  [key: string]: {
    price: number;
    people: any[];
  };
}

const UPLOAD_URL = "https://go-dutch-backend.herokuapp.com/upload_image";

const ImageUpload: React.FC<{
  onContinue: () => void;
  onBack: () => void;
}> = (props) => {
  const ctx = useContext(ReceiptContext);

  const [imageUploaded, setImageUploaded] = useState<boolean>(false);

  // Initialising empty array for items fetched from API
  const loadedItems: { item: string; price: number }[] = [];
  const finalOutput: FinalOutput = {};

  // Image Uploading Process
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // Validation States for Name Input
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
  } = useInput((value: any) => value.trim() !== "");

  const setImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file !== null) {
      setPreview(URL.createObjectURL(file));
    }

    setSelectedFile(file);
    setImageUploaded(false);
  };

  // Post image to API
  const imageUploader = async () => {
    console.log("Chosen Receipt Name:", enteredName);
    const formData = new FormData();

    if (selectedFile !== null) {
      formData.append("image", selectedFile);

      const response = await fetch(UPLOAD_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      for (const key in data) {
        loadedItems.push({
          item: key,
          price: data[key],
        });
      }
      ctx.setItemsHandler(loadedItems);

      loadedItems.forEach((obj) => {
        finalOutput[obj.item] = { price: obj.price, people: [] };
      });

      ctx.setFinalOutputHandler(finalOutput);

      setImageUploaded(true);
    }
  };

  return (
    <>
      <Header title={"Image Upload"} />
      <Container>
        <section>
          <form>
            <div
              className={
                nameInputHasError ? classes.invalid : classes.formcontrol
              }
            >
              <input
                type="text"
                id="name"
                placeholder="Receipt Name"
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
              />
              {nameInputHasError && (
                <p className={classes.error_text}>Name must not be empty</p>
              )}
            </div>
          </form>
          <div className="col-md-4 ">
            {preview ? (
              <PreviewOutput preview={preview} />
            ) : (
              <NoPreviewOutput />
            )}
          </div>
        </section>
        <ImageUploadForm setImageHandler={setImageHandler} />
        {!imageUploaded && (
          <button className={classes.button} onClick={imageUploader}>
            CONFIRM
          </button>
        )}
      </Container>
      <ActionBar
        onContinue={props.onContinue}
        onBack={props.onBack}
        display={imageUploaded}
      />
    </>
  );
};

export default ImageUpload;
