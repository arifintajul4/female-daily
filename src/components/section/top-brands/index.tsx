import { HorizontalSection } from "@components/molecules";
import React from "react";
import Image from "next/image";
import nivea from "@assets/images/nivea.png";
import ordindary from "@assets/images/ordinary.png";
import bodyShop from "@assets/images/body-shop.png";
import skii from "@assets/images/skii.png";
import maybelin from "@assets/images/maybelin.jpg";
import innisfree from "@assets/images/innisfree.png";

const TopBrands = () => {
  return (
    <HorizontalSection withContainer title="Top Brands" subTitle="We all know and love" withSeeMore>
      <div className="grid grid-cols-6 gap-10">
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={nivea} />
        </figure>
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={ordindary} />
        </figure>
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={bodyShop} />
        </figure>
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={skii} />
        </figure>
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={maybelin} />
        </figure>
        <figure className="m-auto">
          <Image width={100} height={100} alt="Brand Logo" src={innisfree} />
        </figure>
      </div>
    </HorizontalSection>
  )
}

export default TopBrands;