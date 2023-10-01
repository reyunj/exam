import React from "react";
import Image from "next/image";
import globeLogo from "@/assets/global-identifier.png";
import person from "@/assets/person.png";
import Link from "next/link";

const MainSection = () => {

  
  return (
    <div>
      <div className="flex items-center font-light font-sans max-w-screen-xl mx-auto px-4 ">
        <input
          className=""
          type="text"
          placeholder="search..."
          title="Type in a name"
        />
      </div>
      <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4">
        <div>
          <p>Country</p>
          <label>USA</label>
        </div>
        <div>
          <p>State</p>
          <label>Select State</label>
        </div>
        <div>
          <p>City</p>
          <label>Select City</label>
        </div>
        <div>
          <p>Meeting Type</p>
          <label>In Person</label>
        </div>
        <div>
        <div className="flex justify-center py-5 items-center max-w-screen-xl mx-auto px-4">
          <div className="flex max-w-screen-xl mx-auto px-4">
            <div>
              <Link className="hover:text-black-600 duration-300" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)] flex  items-center py-2.5 px-5 text-white">
                  Clear Filter
                </li>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <p>Commodo Con</p>
        </div>
        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4 ">
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
           <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
        </div>
        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4 ">
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
           <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
        </div>
        <div>
        </div>
        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4 ">
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch gap-x-8">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
            <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
          <div className="flex flex-col justify-between items-center p-32 flex-1 self-stretch">
            <Image src={globeLogo} alt="globe" />
            <p>Ut enim ad minim veniam</p>
            <Image src={person} alt="person" />
           <Link className="hover:text-teal-700 duration-300 font-sans font-bold text-[#414141]" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex  items-center py-2 px-4">
                  Visit Group
                </li>
              </Link>
          </div>
        </div>
        <div>
        </div>
        <div className="flex justify-center py-5 items-center max-w-screen-xl mx-auto px-4">
          <div className="flex max-w-screen-xl mx-auto px-4">
            <div>
              <Link className="hover:text-black-600 duration-300" href={"/"}>
                <li className="rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg [background:linear-gradient(180deg,_#3ed2ff,_#1839d8)] flex  items-center py-2.5 px-5 text-white">
                  Load More
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
