import React from "react";
import AnimatedContent from "../animations/contexts/AnimatedContext";
import GlassIcons, {
  GlassIconsItem,
} from "../animations/glass_icon/GlassIcons";

export type SkillProps = {
  Items?: GlassIconsItem[];
  Title?: string;
  ClassName?: string;
  Direction?: "vertical" | "horizontal";
  Reverse?: boolean;
  ReverseContent?: boolean;
};

export const SkillContaniner = (props: SkillProps): React.JSX.Element => {
  const {
    Items,
    Title,
    ClassName,
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
      width="fit-content"
      height="fit-content"
    >
      <div
        className={`transform transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)]  
flex flex-col sm:flex-row md:flex-row ${
          ReverseContent ? "flex-row-reverse" : ""
        } 
items-stretch w-fit h-fit p-4 bg-[#171717] rounded-3xl 
border border-neutral-900 hover:border-neutral-400 mb-4 justify-center`}
      >
        {Items && Items.length > 0 ? (
          <div className="flex flex-col justify-center-safe items-center-safe p-8">
            <h2 className="text-3xl font-bold">{Title}</h2>
            <GlassIcons items={Items} className={ClassName} />
          </div>
        ) : (
          "No Skills"
        )}
      </div>
    </AnimatedContent>
  );
};
