import React from "react";
import IMAGES from "./images";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h2 className="d-flex justify-content-center">
          <b>Gallery Page</b>
        </h2>
        <br />
        <div className="d-flex justify-content-center">
          <img
            src={IMAGES.imgOne}
            className="img-thumbnail"
            alt="img1"
            onClick={() => navigate("1/person")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src={IMAGES.imgTwo}
            className="img-thumbnail"
            alt="img2"
            onClick={() => navigate("2/person")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src={IMAGES.imgThree}
            className="img-thumbnail"
            alt="img3"
            onClick={() => navigate("3/person")}
          />
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <img
            src={IMAGES.imgFour}
            className="img-thumbnail"
            alt="img4"
            onClick={() => navigate("4/person")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src={IMAGES.imgFive}
            className="img-thumbnail"
            alt="img5"
            onClick={() => navigate("5/person")}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img
            src={IMAGES.imgSix}
            className="img-thumbnail"
            alt="img6"
            onClick={() => navigate("6/person")}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
