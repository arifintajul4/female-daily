import { ProductCard } from "@components/molecules";
import React from "react";

const MacthesProduct = () => {
  return (
    <section className="grid container py-5 grid-cols-5 gap-5 items-center my-16 bg-woman-image bg-no-repeat bg-cover relative">
      <div className="col-span-2 pl-28">
        <h1 className="font-bold text-2xl mb-5 text-justify">Looking for products that are just simplify perfect for you?</h1>
        <p className="mb-2 text-lg leading-tight text-justify">Here are some products that we beleive match your skin, hair, and body! have we mentioned that they solve your concerns too?</p>
        <div className="flex justify-end">
          <button className="bg-red rounded font-light mt-10 py-2 px-4 text-center text-white ml-auto">See My Macthes</button>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default MacthesProduct;