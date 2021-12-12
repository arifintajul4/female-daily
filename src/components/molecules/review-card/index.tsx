import { Card, Rating } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SampleProduct from "@assets/images/sample-product.png";
import SamplePeople from "@assets/images/sample-editor.jpg";

const ReviewCard = ({ data }: { data: any }) => {
  return (
    <div className="relative">
      <Card border rounded>
        <figure className="flex gap-2 border-b border-gray pb-4">
          <Image width={70} height={70} alt="Sample Product" src={data?.product?.image} />
          <figcaption className="leading-none">
            <a href="">
              <h1 className="font-bold text-base hover:text-red">{data?.product?.name}</h1>
            </a>
            <p className="font-semibold">{data?.product?.desc}</p>
          </figcaption>
        </figure>
        <div className="pt-2 pb-5">
          <div className="flex justify-between">
            <Rating stars={data?.star} />
            <p className="text-gray-light text-sm">2 Hours Ago</p>
          </div>
          <p className="line-clamp-4 mt-2">{data?.comment}
          </p>
        </div>
      </Card>
      <div className="grid justify-center -mt-7">
        <figure className="flex justify-center flex-col">
          <div className="m-auto">
            <Image className="rounded-full" width={50} height={50} src={SamplePeople} alt="Sample People" />
          </div>
          <figcaption className="text-center">
            <p className="font-semibold opacity-90">{data?.user}</p>
            <p className="text-sm text-gray-super-light">{data?.profile.toString().split(',').join(', ')}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
export default ReviewCard;