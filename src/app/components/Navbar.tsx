"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showNav, setshowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleNav = () => {
    setshowNav(!showNav);
  }

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(true);
    } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
      setshowNav(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`flex items-center top-0 ${
        show && "-top-20"
      } duration-300 ease-out transition-all z-40 justify-between fixed right-0 left-0 container mx-auto py-6 md:px-0 px-8`}
    >
      <Image
        src={"/azariahlogo.jpg"}
        alt="AzariahLogo"
        height={50}
        width={50}
      />

      <ul className="md:flex items-center space-x-6 hidden">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/Recipes"}>Recipes</Link>
        </li>
        <li>
          <Link href={"/About"}>About</Link>
        </li>
      </ul>

      <div
        onClick={() => {
          toggleNav();
        }}
        className="flex flex-col z-10 items-end md:hidden w-9 h-5 cursor-pointer relative"
      >
        <div
          className={`w-full h-1 bottom-full bg-white absolute ${
            showNav && "-rotate-45"
          } origin-top-right transition-all ease-out duration-300`}
        ></div>
        <div
          className={`absolute top-full h-1 bg-white ${
            showNav ? "rotate-45 w-full" : "w-4/6"
          } origin-bottom-right transition-all ease-out duration-300`}
        ></div>
      </div>

      <div
        className={`absolute top-0 ${
          showNav ? "right-0" : "-right-full"
        } duration-200 ease-in-out transition-all h-screen w-2/3 bg-black`}
      >
        <ul
          className={`flex text-2xl flex-col items-center relative justify-center mt-32`}
        >
          <li>
            <Link
              href={"/"}
              className={`${
                showNav
                  ? "-translate-x-1/2 opacity-100 delay-200"
                  : "translate-x-full opacity-0"
              } mx-auto absolute duration-300 ease-in-out transition-all`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/Recipes"}
              className={`${
                showNav
                  ? "-translate-x-1/2 opacity-100 delay-300"
                  : "translate-x-full opacity-0"
              } mx-auto absolute duration-300 ease-in-out transition-all mt-16`}
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href={"/About"}
              className={`${
                showNav
                  ? "-translate-x-1/2 opacity-100 delay-500"
                  : "translate-x-full opacity-0"
              } mx-auto absolute duration-300 ease-in-out transition-all mt-32`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
