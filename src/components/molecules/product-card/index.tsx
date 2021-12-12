import { Card, Rating } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SampleProduct from "@assets/images/sample-product.png";

type ProductCardType = {
  border?: boolean;
}

const ProductCard = ({ border = true }: ProductCardType) => {
  return (
    <Card border={border} rounded>
      <figure>
        <Image alt="sample-product" src={SampleProduct} />
      </figure>
      <Rating stars={3} total={7} average={4.9} />
      <a href="">
        <h1 className="text-xl font-bold my-1 hover:text-red">Juice Beauty</h1>
      </a>
      <h2 className="text-lg font-semibold leading-tight mb-1 line-clamp-2">Pytho-Pigments Flawnes Serum Mosutrizer</h2>
      <p className="text-gray-super-light">Rosy Beigy</p>
    </Card>
  )
}

export default ProductCard;