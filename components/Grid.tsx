import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/index";
import React from "react";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, titleClassName, imgClassName,img, spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
