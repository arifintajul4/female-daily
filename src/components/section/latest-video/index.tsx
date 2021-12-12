import { Card } from "@components/atoms";
import { HorizontalSection } from "@components/molecules";
import React from "react";

const LatestVideo = () => {
  return (
    <HorizontalSection title="Latest Videos" subTitle="Watch and learn, ladies" withSeeMore>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card padding={false}>
            <iframe
              className="w-full"
              height={400}
              src="https://www.youtube.com/embed/dw0P8WtQLUk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Card padding={false}>
            <iframe
              className="w-full"
              height={190}
              src="https://www.youtube.com/embed/dw0P8WtQLUk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Card>
          <Card padding={false}>
            <iframe
              className="w-full"
              height={190}
              src="https://www.youtube.com/embed/dw0P8WtQLUk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Card>
        </div>
      </div>
    </HorizontalSection>
  )
}

export default LatestVideo;