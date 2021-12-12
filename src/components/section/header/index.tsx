import React from "react"
import Image from "next/image"
import Logo from "@assets/images/logo-female-daily.png";
import { Input } from "@components/atoms";

const Header = () => {
  const categoryList = ['skincare', 'make up', 'body', 'hair', 'fragrance', 'nails', 'tools', 'brands']

  return (
    <div className="fixed top-0 w-full bg-white z-50">
      <header className="grid grid-cols-9">
        <div className="col-span-8 flex gap-1 items-center border-b border-gray pr-5">
          <div className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <figure className="mx-4">
            <Image width={200} height={50} alt="Logo Female Daily" src={Logo} />
          </figure>
          <Input
            prefix
            prefixIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            placeholder="Search products, articles, topic, brands, etc"
          />
        </div>
        <button className="bg-red text-white flex gap-1 py-4 px-1 col-span-1 justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p className="text-lg">LOGIN/SIGNUP</p>
        </button>
      </header >
      <div className="border-b border-gray py-3 grid justify-center">
        <ul className="flex gap-5">
          {
            categoryList?.map((el, idx) => {
              return <li key={idx} className="font-bold uppercase hover:text-red cursor-pointer">{el}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Header;