import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref, uploadBytes } from "firebase/storage";

const ImageUploader = () => {
  const OnFileUploadToFirebase = (e) => {
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      alert("アップロードしました！！");
    });
  };
  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={ImageLogo} alt="imagelogo" />
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
        <input
          className="imageUploadInput"
          multiple
          name="imageURL"
          type="file"
          accept=".png, .jpeg, .jpg"
          onChange={OnFileUploadToFirebase}
        />
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input className="imageUploadInput" type="file" accept=".png, .jpeg, .jpg" onChange={OnFileUploadToFirebase} />
      </Button>
    </div>
  );
};

export default ImageUploader;
