import React from "react";
import "./Navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark navbar-1">
      <div class="container">
        <a class="navbar-brand" href="#">
          <FaGraduationCap
            classNamw="d-inline-block align-text-top"
            size={30}
            style={{
              color: "#fff",
            }}
          />
          Khadijat Academy
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                Courses
              </a>
            </li>

            <li class="nav-item mx-3">
              <a class="nav-link " href="#">
                <CiShoppingCart
                  size={30}
                  classNamw="d-inline-block align-text-top mx-1"
                />
                Cart
              </a>
            </li>
          </ul>
          <nav class="navbar">
            <form class="container-fluid justify-content-start">
              <button
                class="btn btn-outline-light me-2 mx-3 btn-1"
                type="button"
              >
                Sign in
              </button>
              <Link
                to="/sign-up"
                class="btn  btn-secondary mx-3 btn-2"
                type="button"
              >
                Join Academy
              </Link>
            </form>
          </nav>
        </div>
      </div>
    </nav>
  );
}
