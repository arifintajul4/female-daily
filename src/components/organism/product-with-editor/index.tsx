import { ProductCard } from "@components/molecules";
import React from "react";
import Image from "next/image";
import SampleEditor from "@assets/images/sample-editor.jpg";

type ProductWithEditorType = {
  isLoading?: boolean;
  data: any
}

const ProductWithEditor = ({ isLoading = false, data }: ProductWithEditorType) => {
  return (
    <div className="relative">
      <figure className="flex gap-4 absolute left-5">
        <Image width={70} height={70} className="rounded-full" alt="Editor" src={SampleEditor} />
        <figcaption>
          <h5 className="font-bold text-lg">{data?.editor}</h5>
          <p className="text-gray-super-light text-sm">{data?.role}r</p>
        </figcaption>
      </figure>
      <div className="mt-14">
        <ProductCard data={data?.product} />
      </div>
    </div>
  )
}

export default ProductWithEditor;