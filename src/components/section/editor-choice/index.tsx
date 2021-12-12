import { HorizontalSection } from "@components/molecules";
import { ProductWithEditor } from "@components/organism";
import React from "react";

const EditorChoice = () => {
  return (
    <HorizontalSection title="Editor's Choice" subTitle="Curated with love">
      <div className="grid grid-cols-5 gap-5">
        <ProductWithEditor />
        <ProductWithEditor />
        <ProductWithEditor />
        <ProductWithEditor />
        <ProductWithEditor />
      </div>
    </HorizontalSection>
  )
}

export default EditorChoice;