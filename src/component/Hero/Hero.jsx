import React from "react";
import girl from "../../img/bg-remove-edit.png";
import "./Hero.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm hero-section">
              <h1 className="header">Learn and practice at your own pace</h1>
              <p className="sub-header">
                we are here to help you achive that journey of a seamless online
                learning
              </p>
              <div className="form-input">
                <CiSearch size={35} className="search" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for courses"
                />
                <input type="submit" value="Search" className="submit" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm">
              <div className="second">
                <img className="girl-img" src={girl} alt="girl-with-book" />

                <div className="outer-border">
                  <div className="inner-border-3">
                    <FaGraduationCap className="icons" size={35} />
                  </div>
                  <div>
                    <span style={{ fontWeight: "700" }}>250k</span>
                    <br />
                    <span>Courses</span>
                  </div>
                </div>

                <div className="outer-border-2">
                  <div className="inner-border-2">
                    <BsFillPlayFill className="icons-2" size={35} />
                  </div>
                  <div>
                    <span style={{ fontWeight: "700" }}>Welldone</span>
                    <br />
                    <span>you have been enrolled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#093399", width: "260%", height: 107 }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>
    </>
  );
}
