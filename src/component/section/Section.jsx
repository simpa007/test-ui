import React from "react";
import "./Section.css";
import books from "../../img/books.jpg";
import face from "../../img/face.jpg";
import study from "../../img/study.jpg";
import bookGirl from "../../img/girl-n-books.jpg";

import { IoMdStar, IoIosArrowForward } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { CiReceipt } from "react-icons/ci";
import { GiTeacher } from "react-icons/gi";
export default function Section() {
  return (
    <div>
      <div className="container section-1">
        <div className="main">
          <h1>
            <span style={{ color: "#1154fd" }}> Our</span> Features
          </h1>
          <p>
            You will take your career to the next level with khadijat Academy by
            getting world class resources
          </p>
        </div>
        <div
          className="row g-4 mt-4"
          // style={{ border: "3px solid yellow" }}
        >
          <div className="col">
            <div class="card h-100 text-center mb-3" style={{ width: "18rem" }}>
              <div className="my-cardIcon">
                <CiReceipt className="my-icon" size={35} />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#1154fd" }}>
                  Unlimited Access to Courses
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 text-center mb-3" style={{ width: "18rem" }}>
              <div className="my-cardIcon-1">
                <GiTeacher className="my-icon" size={35} />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#1154fd" }}>
                  Unlimited Access to Courses
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 text-center mb-3" style={{ width: "18rem" }}>
              <div className="my-cardIcon-2">
                <FaGraduationCap className="my-icon" size={35} />
              </div>
              <div class="card-body">
                <h5 class="card-title" style={{ color: "#1154fd" }}>
                  Unlimited Access to Courses
                </h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="container-fluid section-2">
        <div
          className="container"
          // style={{ border: "1px solid grey" }}
        >
          <div className="main-1">
            <h1>
              <span style={{ color: "#1154fd" }}> Explore</span> Our Courses
            </h1>
            <p>
              You will take your career to the next level with khadijat Academy
              by getting world class resources
            </p>
          </div>
          <div className="courses">
            <ul>
              <li className="active">Software Development</li>
              <li>Graphic Design</li>
              <li>UI/UX Design</li>
              <li>Catering</li>
            </ul>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={books} class="card-img-top section2-img" alt="..." />
                <div class="card-body">
                  <div className="course-details">
                    <p>Hand on javscript</p>
                    <span style={{ color: "#ff2a60" }}> &#8358; 9,900</span>
                  </div>
                </div>
                <hr />
                <div className="course-rating">
                  <div className="avatar-content">
                    <div className="avatar">
                      <img className="avatar-img" src={face} />
                    </div>
                    <span className="avatar-text">John Friday</span>
                  </div>

                  <div className="star-rating">
                    <IoMdStar size={20} style={{ color: "#f8872b" }} />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-explore">
            <button type="button" class="btn btn-lg section2-btn">
              Explore All Courses
            </button>
          </div>
        </div>
      </div>
      {/* section 3 */}

      <div className="container">
        <div className="section-3">
          <div className="part-1">
            <h3>Here are some books designed for you</h3>
            <p>
              Do velit velit non dolore Lorem consequat. Do incididunt
              incididunt veniam deserunt elit commodo minim velit excepteur.
              Dolor laborum irure culpa esse aute mollit sint.
            </p>
            <button type="button" class="btn btn-primary btn-lg">
              Download
            </button>
          </div>
          <div className="part-2">
            <img
              src={study}
              className="card-img-top img-sec"
              alt="..."
              style={{ width: "20rem" }}
            />

            <div className="border-1"></div>
            <div className="border-2"></div>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="container section4-div">
        <div className="main-4">
          <h1>
            What Our <span style={{ color: "#1154fd" }}>Students</span> Says
          </h1>
          <p>
            Here are what our online students have to say about Khadijat Academy
          </p>
        </div>

        <div className="section-4">
          <div className="vertical-card">
            <div>
              <p>
                "Veniam consectetur dolore adipisicing in velit. Culpa officia
                dolore nostrud aliqua aute ad magna quis aute est irure. Sint
                consectetur in duis dolore excepteur laborum."
              </p>
            </div>

            <div className="vertical-rating">
              <p>Jessica Luo</p>
              <div>
                <IoMdStar size={20} style={{ color: "#f8872b" }} />
                <IoMdStar size={20} style={{ color: "#f8872b" }} />
                <IoMdStar size={20} style={{ color: "#f8872b" }} />
                <IoMdStar size={20} style={{ color: "#f8872b" }} />
                <IoMdStar size={20} style={{ color: "#f8872b" }} />
              </div>
            </div>
          </div>
          <div className="horizontal-card">
            <img src={bookGirl} alt="girl with book" className="book-girl" />

            <div class="icon-container">
              <IoIosArrowForward size={20} className="fa" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
