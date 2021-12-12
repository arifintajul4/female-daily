import { HorizontalSection, PeopleGroupCard } from "@components/molecules";
import React from "react";

const PopularGroups = () => {
  return (
    <HorizontalSection title="Popular Groups" subTitle="Where the beauty TALK here" withSeeMore>
      <div className="grid grid-cols-4 gap-10">
        <PeopleGroupCard />
        <PeopleGroupCard />
        <PeopleGroupCard />
        <PeopleGroupCard />
      </div>
    </HorizontalSection>
  )
}

export default PopularGroups;