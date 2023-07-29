import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

// BEM --> Block Element Modifier.

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <a
        href="#home"
        onClick={() => {
          setToggleMenu(false);
        }}
      >
        Home
      </a>
      <a
        href="#wgpt3"
        onClick={() => {
          setToggleMenu(false);
        }}
      >
        What is GPT?
      </a>
      <a
        href="#possibility"
        onClick={() => {
          setToggleMenu(false);
        }}
      >
        Open AI
      </a>
      <a
        href="#features"
        onClick={() => {
          setToggleMenu(false);
        }}
      >
        Case Studies
      </a>
      <a
        href="#blog"
        onClick={() => {
          setToggleMenu(false);
        }}
      >
        Library
      </a>
    </>
  );

  return (
    <div className="gpt3__navbar ">
      {toggleMenu && (
        <div
          className="gpt3__navbar-before"
          onClick={() => {
            setToggleMenu(false);
          }}
        ></div>
      )}
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={"1.5rem"}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={"1.5rem"}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links ">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign ">
              <p>Sign in</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
