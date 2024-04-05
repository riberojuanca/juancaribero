import { BiMessageSquareDetail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { PiPaypalLogoLight } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

function Menu() {
  return (
    <>
      <Link className="logoTitle" href={"/"}>
        <Image
          src="/icon.png"
          width={24}
          height={24}
          alt="Vela, logo/icono de Luzbelito.com"
        ></Image>
        <h1 className="title">Luzbelito</h1>
      </Link>
      <div className="icons">
        <a href="wa.me/59891848690">
          <BiMessageSquareDetail />
        </a>
        <a
          href="https://github.com/riberojuanca"
          target="_blank"
          rel="noopener"
        >
          <BiLogoGithub />
        </a>
        <a href="mailto:riberojuanca@gmail.com">
          <MdOutlineAlternateEmail />
        </a>
        <a href="https://www.linkedin.com/in/juan-r-0bb8a0265/">
          <BiLogoLinkedinSquare />
        </a>
        <a href="https://www.paypal.com/donate/?hosted_button_id=7797WAYFESTGY">
          <PiPaypalLogoLight />
        </a>
      </div>
    </>
  );
}

export default Menu;
