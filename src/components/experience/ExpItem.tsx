import React from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import PlaceHolderImg from "../../assets/images/placeholder.jpg";

type Props = {
  ImageUrl?: string;
  Role?: string;
  Company?: string;
  Duration?: string;
  Description?: string;
  Direction?: "vertical" | "horizontal";
  Reverse?: boolean;
  ReverseContent?: boolean;
};

export const ExpItem = (props: Props): React.JSX.Element => {
  const {
    ImageUrl = PlaceHolderImg,
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
        className={`transform transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] 
    hover:scale-[1.015] hover:-translate-y-1 
    flex ${ReverseContent ? "flex-row-reverse" : ""} 
    items-stretch w-full h-fit p-4 bg-[#171717] rounded-3xl 
    border border-neutral-900 hover:border-neutral-400 mb-4`}
      >
        {/* First section */}
        <div className="w-fit p-4 flex justify-center items-center">
          <img
            src={ImageUrl}
            alt="Company Logo"
            className="w-50 h-full rounded-full"
          />
        </div>

        {/* Divider */}
        <div className="w-fit flex justify-center items-stretch px-2">
          <div className="w-px h-full bg-neutral-600" />
        </div>

        {/* Second section */}
        <div className="w-full py-4 pl-4 flex flex-col justify-between">
          <p className="text-white font-semibold text-lg">{Role}</p>
          <div className="flex justify-between items-center-safe">
            <p className="text-neutral-400">{Company}</p>
            <p className="text-neutral-500 italic text-sm">{Duration}</p>
          </div>
          <p className="text-neutral-300 mt-2">{Description}</p>
        </div>
      </div>
    </AnimatedContent>
  );
};
