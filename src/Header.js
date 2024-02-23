import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaRegBell } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import img from "./images/img.jpg";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className="topbasContainer">
      <div className="toperLeft">
        <Link to="/">
          <h3>Technology</h3>
        </Link>
      </div>
      <div className="topperCenter">
        <div className="searchbar">
          <IoIosSearch className="searchIcon" />
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="topperRight">
        <div className="topperlink">
          <span>Homepage</span>
          <span>TimeLine</span>
        </div>
        <div className="man1">
          <div className="man">
            <IoMdPerson />
            <span>2</span>
          </div>
          <div className="man">
            <MdMessage />
            <span>2</span>
          </div>
          <div className="man">
            <FaRegBell />
            <span>2</span>
          </div>
        </div>
        <div className="man">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
