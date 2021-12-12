import { Card, Rating } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SampleProduct from "@assets/images/sample-product.png";
import SamplePeople from "@assets/images/sample-editor.jpg";

const ReviewCard = () => {
  return (
    <div className="relative">
      <Card border rounded>
        <figure className="flex gap-2 border-b border-gray pb-4">
          <Image width={70} height={70} alt="Sample Product" src={SampleProduct} />
          <figcaption className="leading-none">
            <a href="">
              <h1 className="font-bold text-base hover:text-red">VAL BY VALERIE THOMAS</h1>
            </a>
            <p className="font-semibold">C E Ferulic</p>
          </figcaption>
        </figure>
        <div className="pt-2 pb-5">
          <div className="flex justify-between">
            <Rating stars={4} />
            <p className="text-gray-light text-sm">2 Hours Ago</p>
          </div>
          <p className="line-clamp-4 mt-2">Lorem ipsum dolor sit amet, commodo facilisis usu ex, at eum suscipit recteque. Duis scribentur eum in. Possit menandri gloriatur no sit, at eos affert civibus probatus. Ut pericula eloquentiam vix, doctus alienum pericula eu vis. Et duo alterum lucilius eleifend, sea tollit labore maiestatis id, qui at illud evertitur efficiendi.
          </p>
        </div>
      </Card>
      <div className="grid justify-center -mt-7">
        <figure className="flex justify-center flex-col">
          <div className="m-auto">
            <Image className="rounded-full" width={50} height={50} src={SamplePeople} alt="Sample People" />
          </div>
          <figcaption className="text-center">
            <p className="font-semibold opacity-90">Putri Deani</p>
            <p className="text-sm text-gray-super-light">Combination Skin, 25-29</p>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
export default ReviewCard;