import Image from "next/image";

import classes from "./ImageUploadForm.module.css";

const ImageUploadForm: React.FC<{
  setImageHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <form className={classes.image_form}>
      <input type="file" onChange={props.setImageHandler} />
    </form>
  );
};

export default ImageUploadForm;

export const PreviewOutput: React.FC<{ preview: string }> = (props) => {
  return (
    <div className={classes.preview}>
      <Image
        src={props.preview}
        width={244}
        height={344}
        alt={"Your Selected Photo"}
      />
    </div>
  );
};

export const NoPreviewOutput = () => {
  return (
    <div className={classes.no_preview}>
      <p>No Preview</p>
    </div>
  );
};
