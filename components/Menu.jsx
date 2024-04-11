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
      <Link className="logoTitle" href={"/"} target="_blank">
        <Image
          src="/icon.png"
          width={24}
          height={24}
          alt="Vela, logo/icono de Luzbelito.com"
        ></Image>
        <h1 className={`title`}>Luzbelito</h1>
      </Link>
      <div className="icons">
        <Link className="flag" href="/">
          🇪🇸
        </Link>
        <Link className="flag" href="/en">
          🇺🇸
        </Link>
        <Link href="wa.me/59891848690" target="_blank">
          <AiOutlineWhatsApp />
        </Link>
        <Link href="mailto:riberojuanca@gmail.com" target="_blank">
          <IoMailOutline />
        </Link>
        <Link
          href="https://www.paypal.com/donate/?hosted_button_id=7797WAYFESTGY"
          target="_blank"
        >
          <PiPaypalLogoLight />
        </Link>
        <Link
          href="https://www.linkedin.com/in/juan-r-0bb8a0265/"
          target="_blank"
        >
          <PiLinkedinLogo />
        </Link>
        <Link
          href="https://github.com/riberojuanca"
          target="_blank"
          rel="noopener"
        >
          <VscGithubAlt />
        </Link>
      </div>
    </>
  );
}

export default Menu;
