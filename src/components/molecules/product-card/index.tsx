import { Card, Rating } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SampleProduct from "@assets/images/sample-product.png";

type ProductCardType = {
  border?: boolean;
  data?: any;
}

const ProductCard = ({ border = true, data }: ProductCardType) => {
  return (
    <Card border={border} rounded>
      <figure>
        <Image
          alt="sample-product"
          objectFit="contain"
          width={680}
          height={810}
          src={SampleProduct}
        />
      </figure>
      <Rating stars={3} total={7} average={data?.rating || 4.7} />
      <a href="">
        <h1 className="text-xl font-bold my-1 hover:text-red">{data?.name || 'JUICE BEAUTY'}</h1>
      </a>
      <h2 className="text-lg leading-tight mb-1 line-clamp-2">{data?.description || 'Pure Pressed Blush'}</h2>
      {/* <p className="text-gray-super-light">Rosy Beigy</p> */}
    </Card>
  )
}

export default ProductCard;