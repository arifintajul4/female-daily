import { HorizontalSection, ProductCard } from "@components/molecules";
import React from "react";

const TrenndingWeeks = () => {
  return (
    <HorizontalSection title="Trending This Weeks" subTitle="See our weekly most reviewed products" >
      <div className="grid grid-cols-6 gap-4">
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
        <ProductCard border={false} />
      </div>
    </HorizontalSection>
  )
}

export default TrenndingWeeks;