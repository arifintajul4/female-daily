import { HorizontalSection } from "@components/molecules";
import ReviewCard from "@components/molecules/review-card";
import React from "react";

const LatestReview = () => {
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="col-span-2">
        <HorizontalSection title="Latest Review" subTitle="So you can make better purchase decision" withSeeMore>
          <div className="grid grid-cols-2 gap-10">
            <ReviewCard />
            <ReviewCard />
          </div>
        </HorizontalSection>
      </div>
      <div>
        <div style={{ width: 300, height: 250 }} className="border text-center text-2xl border-gray-super-light px-10 font-bold text-gray-dark flex justify-center items-center bg-gray-light m-auto mt-2">
          MR 2 <br />
          300*250
        </div>
      </div>
    </div>
  )
}

export default LatestReview;