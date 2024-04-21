import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";
import { VscGithubAlt } from "react-icons/vsc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiPaypalLogoLight } from "react-icons/pi";

import { Atkinson_Hyperlegible } from "next/font/google";

import Link from "next/link";
import Image from "next/image";

export const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Menu() {
  return (
    <>
      {/* <Link className="logoTitle" href={"/"} target="_blank">
        <Image
          src="/icon.png"
          width={24}
          height={24}
          alt="Vela, logo/icono de Luzbelito.com"
        ></Image>
      </Link> */}
      <div className="icons">
        <Link href="wa.me/59891848690" target="_blank">
          <AiOutlineWhatsApp />
          +598 9184 8690
        </Link>
        <Link href="mailto:riberojuanca@gmail.com" target="_blank">
          <IoMailOutline />
          riberojuanca@gmail.com
        </Link>
        <Link
          href="https://github.com/riberojuanca"
          target="_blank"
          rel="noopener"
        >
          <VscGithubAlt />
          riberojuanca
        </Link>
        <Link
          href="https://www.linkedin.com/in/juan-r-0bb8a0265/"
          target="_blank"
        >
          <PiLinkedinLogo />
          in/juan-r-0bb8a0265
        </Link>
        {/* <Link
          href="https://www.paypal.com/donate/?hosted_button_id=7797WAYFESTGY"
          target="_blank"
        >
          <PiPaypalLogoLight />
        </Link> */}
      </div>
    </>
  );
}

export default Menu;
