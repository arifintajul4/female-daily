import { Card } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SamplePeople from "@assets/images/sample-editor.jpg";

const PeopleGroupCard = () => {
  return (
    <Card shadow rounded border >
      <div>
        <figure className="flex justify-center">
          <Image width={150} height={150} className="rounded-full" alt="sample people" src={SamplePeople} />
        </figure>
        <h2 className="text-center font-bold text-xl mt-2 mb-10">Embrace the Curl</h2>
        <div className="my-4">
          <ul className="flex gap-10 justify-center">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </li>
          </ul>
          <p className="text-center">May our curls pop and never stop!</p>
        </div>
      </div>
    </Card>
  )
}

export default PeopleGroupCard;