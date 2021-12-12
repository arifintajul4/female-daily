import { HorizontalSection } from "@components/molecules";
import ReviewCard from "@components/molecules/review-card";
import React from "react";
import Slider from "react-slick";

const LatestReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    dotsClass: 'slick-dots slick-thumb-featured',
  };

  return (
    <div className="grid grid-cols-3 items-center">
      <div className="col-span-2">
        <HorizontalSection title="Latest Review" subTitle="So you can make better purchase decision" withSeeMore>
          <Slider {...settings}>
            <div className="px-2">
              <ReviewCard />
            </div>
            <div className="px-2">
              <ReviewCard />
            </div>
            <div className="px-2">
              <ReviewCard />
            </div>
            <div className="px-2">
              <ReviewCard />
            </div>
          </Slider>
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