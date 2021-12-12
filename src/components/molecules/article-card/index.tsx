import { Card } from "@components/atoms";
import React from "react";
import Image from "next/image";
import DefaultImage from "@assets/images/default-image.png";

const ArticleCard = ({ data }: { data: any }) => {
  return (
    <Card padding={false}>
      <figure>
        <Image className="rounded-xl" objectFit="contain" width={674} height={350} alt="Sample Article" src={data?.image || DefaultImage} />
      </figure>
      <a href="">
        <h1 className="font-bold text-2xl hover:text-red">{data?.title}</h1>
      </a>
      <div className="flex gap-1 mt-2">
        <p className="text-gray-dark">{data?.author} |</p> <p className="text-gray-super-light">{data?.published_at}</p>
      </div>
    </Card>
  )
}

export default ArticleCard;