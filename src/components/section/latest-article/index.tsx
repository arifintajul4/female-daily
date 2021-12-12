import { HorizontalSection } from "@components/molecules";
import ArticleCard from "@components/molecules/article-card";
import React from "react";

const LatestArticle = ({ data }: { data: any }) => {
  return (
    <HorizontalSection withContainer title="Latest Articles" subTitle="So you can make better purchase decision" withSeeMore>
      <div className="grid grid-cols-3 gap-7">
        {
          data?.map((el: any, idx: number) => {
            return <ArticleCard data={el} key={idx} />
          })
        }
      </div>
    </HorizontalSection>
  )
}

export default LatestArticle;