import { HorizontalSection } from "@components/molecules";
import { ProductWithEditor } from "@components/organism";
import React from "react";

const EditorChoice = ({ data, isLoading = false }: { data: any, isLoading?: boolean }) => {
  return (
    <HorizontalSection withContainer title="Editor's Choice" subTitle="Curated with love">
      <div className="grid grid-cols-5 gap-5">
        {
          data?.map((el: any, idx: number) => {
            return <ProductWithEditor data={el} key={idx} isLoading={isLoading} />
          })
        }
      </div>
    </HorizontalSection>
  )
}

export default EditorChoice;