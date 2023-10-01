import React from "react";
import Image from "next/image";
import linkedin from "@/assets/linkedin.png";
import fb from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import youtube from "@/assets/youtube.png";
import nlxLogo from "@/assets/nlx-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div >
      <div className="bg-gradient-to-b from-blue-700 to-transparent bg-blend-multiply">
        <div className="flex justify-between py-5 items-center max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col justify-between items-center flex-1 self-stretch text-white">
          <ul className="gap-x-4">
              <li className="text-white font-noto-sans text-24 font-bold">Get Started</li>
              <li>Login</li>
              <li>Join Our Group</li>
              <li>Visit Our Group</li>
              <li>30 Day Trial Membership</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center flex-1 self-stretch text-white">
          <ul className="gap-x-4">
              <li className="text-white font-noto-sans text-24 font-bold">About</li>
              <li>Why Lorem Ipsum?</li>
              <li>Our Story</li>
              <li>Community Involvement</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center flex-1 self-stretch text-white">
            <ul className="gap-x-4">
              <li className="text-white font-noto-sans text-24 font-bold gap-y-4">Contact Us</li>
              <li className="text-white font-noto-sans text-16 font-normal leading-6">4517 Washington Ave.</li>
              <li> Manchester,Kentucky 39495</li>
              <li>(555) 543 - 7653</li>
            </ul>
          </div>
          <div className="flex flex-col items-center p-0 gap-4 mx-auto w-280.46 h-197">
              <div className="w-154 h-131 flex-none order-0 flex-grow-0">
                <Image src={nlxLogo} alt="main-logo" />
              </div>
              <div className="rounded-tl rounded-tr-lg rounded-br-lg rounded-bl [background:linear-gradient(180deg,_#dfed5a,_#47980b)] flex items-center  py-2.5 px-5 ">
              <Link className='px-16 text-center hover:text-teal-700 duration-300 font-bold' href={"/"}>Join Our Group</Link>
              </div>
            </div>
        </div>
        </div>
      <div className="bg-blue-900 text-white p-4 flex justify-between ">
        <div className="flex items-center font-light font-sans max-w-screen-xl mx-auto px-4">
          <p>
            Copyright © 2023 Lorem Ipsum. All rights reserved. | AGDP IT
            Solutions
          </p>
        </div>
        <div className="flex items-center space-x-4 max-w-screen-xl mx-auto px-4">
          <Image src={linkedin} alt="linkedin" />
          <Image src={fb} alt="fb" />
          <Image src={twitter} alt="twitter" />
          <Image src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
