import { HorizontalSection } from "@components/molecules";
import ArticleCard from "@components/molecules/article-card";
import React from "react";

const LatestArticle = () => {
  return (
    <HorizontalSection title="Latest Articles" subTitle="So you can make better purchase decision" withSeeMore>
      <div className="grid grid-cols-3 gap-7">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </HorizontalSection>
  )
}

export default LatestArticle;