import React from "react";
import { Img, Heading } from "./..";

export default function MissionEditProperty({ property = "Property", ...props }) {
  return (
    <div {...props}>
      <Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-[28px] w-[28px]" />
      <Heading size="lg" as="h1" className="ml-4 !text-gray-600">
        {property}
      </Heading>
      <Img
        src="images/img_arrow_right.svg"
        alt="arrowright_one"
        className="self-end h-[18px] w-[18px] cursor-pointer"
      />
    </div>
  );
}
