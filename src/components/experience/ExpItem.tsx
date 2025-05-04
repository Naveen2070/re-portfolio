import React from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import PlaceHolderImg from "../../assets/images/placeholder.jpg";

export type ExpProps = {
  id?: string | number;
  ImageUri?: string;
  Role?: string;
  Company?: string;
  Duration?: string;
  Description?: React.JSX.Element;
  Direction?: "vertical" | "horizontal";
  Reverse?: boolean;
  ReverseContent?: boolean;
};

export const ExpItem = (props: ExpProps): React.JSX.Element => {
  const {
    id,
    ImageUri = PlaceHolderImg,
    Role,
    Company,
    Duration,
    Description,
    Direction = "horizontal",
    Reverse = false,
    ReverseContent = false,
  } = props;

  return (
    <AnimatedContent
      key={id}
      distance={100}
      direction={Direction}
      reverse={Reverse}
      config={{ tension: 50, friction: 25 }}
      initialOpacity={0.0}
      animateOpacity
      scale={1.1}
      threshold={0.1}
      width="80dvw"
      height="fit-content"
    >
      <div
        key={id}
        className={`transform transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
    hover:scale-[1.015] hover:-translate-y-1 
    flex flex-col sm:flex-row md:flex-row ${ReverseContent ? "flex-row-reverse" : ""
          } 
    items-stretch w-full h-fit p-4 bg-[#171717] rounded-3xl 
    border border-neutral-900 hover:border-neutral-400 mb-4`}
      >
        {/* First section */}
        <div className="w-full sm:w-fit md:w-fit p-4 flex justify-center items-center">
          <img
            src={ImageUri}
            alt="Company Logo"
            className="w-50 h-full object-contain rounded-full"
          />
        </div>

        {/* Divider */}
        <div className="w-fit flex justify-center items-stretch px-2">
          <div className="w-px h-full bg-neutral-600" />
        </div>

        {/* Second section */}
        <div className="w-full text-[14px] sm:text-[20px] md:text-[24px] py-4 pl-4 flex flex-col justify-center">
          <p className="text-white text-[16px] sm:text-[22px] md:text-[26px] font-semibold">
            {Role}
          </p>
          <div className="flex justify-between items-center-safe text-[12px] sm:text-[16px] md:text-[18px]">
            <p className="text-neutral-400">{Company}</p>
            <p className="text-neutral-500 italic">{Duration}</p>
          </div>
          {Description}
        </div>
      </div>
    </AnimatedContent>
  );
};
