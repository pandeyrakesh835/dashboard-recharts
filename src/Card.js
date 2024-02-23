import React from "react";
import img3 from "./images/img3.jpg";
import "./Card.css";

const Card = () => {
  return (
    <div className="main-div">
      <div className="content">
        <h2>Our Service Page</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="main-card">
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>

        
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>

        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
        <div className="img-div">
          <img src={img3} alt="img" />
          <div className="card-content">
            <h4>hello my name</h4>
            <p>Lorem Ipsum is simply dummy text of the printing </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
