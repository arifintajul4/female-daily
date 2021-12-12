import React from "react";
import Image from "next/image";
import Logo from "@assets/images/logo-female-daily.png";
import DownloadInPs from "@assets/images/download-ps.png";
import DownloadInAp from "@assets/images/download-ap.png";
import FbIcon from "@assets/icons/facebook.png";
import IgIcon from "@assets/icons/instagram.jpg";
import TwIcon from "@assets/icons/twitter.png";
import YtIcon from "@assets/icons/youtube.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray container py-8">
      <div className="grid grid-cols-4">
        <ul className="space-y-3">
          <li className="font-bold cursor-pointer text-sm">About Us</li>
          <li className="font-bold cursor-pointer text-sm">Feedback</li>
          <li className="font-bold cursor-pointer text-sm">Contact</li>
        </ul>
        <ul className="space-y-3">
          <li className="font-bold cursor-pointer text-sm">Terms & Conditions</li>
          <li className="font-bold cursor-pointer text-sm">Privacy Policy</li>
          <li className="font-bold cursor-pointer text-sm">Help</li>
        </ul>
        <ul className="space-y-3">
          <li className="font-bold cursor-pointer text-sm">Award</li>
          <li className="font-bold cursor-pointer text-sm">Newsletter</li>
        </ul>
        <div>
          <p className="font-bold text-sm">Download Our Mobile App</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Image layout="responsive" alt="Logo Female Daily" src={DownloadInPs} />
            <Image layout="responsive" alt="Logo Female Daily" src={DownloadInAp} />
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-4 items-center">
        <figure className="col-span-3">
          <Image width={160} height={40} alt="Logo Female Daily" src={Logo} />
          <figcaption>
            <p className="text-gray-dark">Copyright © 2015-2017 Female Daily Network	• All rights reserved</p>
          </figcaption>
        </figure>
        <ul className="flex gap-4">
          <li><Image width={35} height={35} alt="Facebook" src={FbIcon} /></li>
          <li><Image width={35} height={35} alt="Twitter" src={TwIcon} /></li>
          <li><Image width={35} height={35} alt="Instagram" src={IgIcon} /></li>
          <li><Image width={35} height={35} alt="Youtube" src={YtIcon} /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;