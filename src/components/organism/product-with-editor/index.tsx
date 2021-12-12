import { ProductCard } from "@components/molecules";
import React from "react";
import Image from "next/image";
import SampleEditor from "@assets/images/sample-editor.jpg";

const ProductWithEditor = () => {
  return (
    <div className="relative">
      <figure className="flex gap-4 absolute left-5">
        <Image width={70} height={70} className="rounded-full" alt="Editor" src={SampleEditor} />
        <figcaption>
          <h5 className="font-bold text-lg">Arinda</h5>
          <p className="text-gray-super-light text-sm">Senior Editor</p>
        </figcaption>
      </figure>
      <div className="mt-14">
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductWithEditor;