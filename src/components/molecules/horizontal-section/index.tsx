import React, { ReactNode } from "react";

type HorizontalSectionType = {
  title: string;
  subTitle?: string;
  children: ReactNode;
  withSeeMore?: boolean;
  withContainer?: boolean;
}

const HorizontalSection = ({ title, subTitle, children, withSeeMore = false, withContainer = false }: HorizontalSectionType) => {
  return (
    <section className={`my-12 ${withContainer ? 'container' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="mb-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          {subTitle && <h6 className="text-gray-super-light font-bold text-lg">{subTitle}</h6>}
        </div>
        {
          withSeeMore && (
            <p className="text-red font-semibold text-lg cursor-pointer flex gap-5 items-center">
              See More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>
          )
        }
      </div>
      {children}
    </section>
  )
}

export default HorizontalSection;