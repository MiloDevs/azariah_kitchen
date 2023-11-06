"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      } duration-300 ease-out transition-all justify-between fixed right-0 left-0 container mx-auto py-6`}
    >
      <Image
        src={"/azariahlogo.jpg"}
        alt="AzariahLogo"
        height={50}
        width={50}
      />

      <ul className="flex items-center space-x-6">
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
    </div>
  );
};

export default Navbar;
