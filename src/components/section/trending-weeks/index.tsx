import { HorizontalSection, ProductCard } from "@components/molecules";
import React from "react";
import Slider from "react-slick";

const TrenndingWeeks = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    dotsClass: 'slick-dots slick-thumb-featured',
  };
  return (
    <HorizontalSection withContainer title="Trending This Weeks" subTitle="See our weekly most reviewed products" >

      <Slider {...settings}>
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
      </Slider>
    </HorizontalSection >
  )
}

export default TrenndingWeeks;