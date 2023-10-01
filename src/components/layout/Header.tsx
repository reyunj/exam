import Image from "next/image";
import React from "react";
import logo from "public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3">
        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4">
          <Link href={"/"}>
            <div>
              <Image src={logo} alt="Lorem Ipsum" />
            </div>
          </Link>
          <ul className="flex gap-x-10 h-full items-center duration-300 font-sans font-semibold text-[#414141]">
            <div className="flex gap-x-8 h-full items-center duration-300 font-sans font-semibold text-[#414141]">
              <Link className="hover:text-teal-700 duration-300 " href={"/"}>
                <li>Home</li>
              </Link>
              <Link className="hover:text-teal-700 duration-300" href={"/"}>
                <li>Why NLX?</li>
              </Link>
              <Link className="hover:text-teal-700 duration-300" href={"/"}>
                <li>News</li>
              </Link>
              <Link className="hover:text-teal-700 duration-300" href={"/"}>
                <li>Events</li>
              </Link>
            </div>
            <div className="flex flex-row items-center justify-start">
              <Link className="hover:text-black-600 duration-300" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)] flex flex-row items-center justify-start py-2.5 px-5 text-white">
                  Find A Group
                </li>
              </Link>
              <Link className="hover:text-teal-500 duration-300" href={"/"}>
                <li className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex flex-row items-center justify-start py-2.5 px-5 text-primary">
                  Start A Group
                </li>
              </Link>
            </div>
            <Link className="hover:text-teal-700 duration-300" href={"/"}>
              <div className="flex gap-x-8 h-full items-center duration-300 font-sans font-bold text-[#414141]">
                Login
              </div>
            </Link>
          </ul>
        </div>
    </header>
  );
};

export default Header;
