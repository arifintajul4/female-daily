import { Card } from "@components/atoms";
import React from "react";
import Image from "next/image";
import SampleArticle from "@assets/images/sample-article.jpg";

const ArticleCard = () => {
  return (
    <Card padding={false}>
      <figure>
        <Image className="rounded-xl" alt="Sample Article" src={SampleArticle} />
      </figure>
      <a href="">
        <h1 className="font-bold text-2xl hover:text-red">Suka Thrifting? Ini 6 Tips & Tricks yang Perlu Kamu Tahu!</h1>
      </a>
      <div className="flex gap-1 mt-2">
        <p className="text-gray-dark">Username |</p> <p className="text-gray-super-light">2 Hours Ago</p>
      </div>
    </Card>
  )
}

export default ArticleCard;