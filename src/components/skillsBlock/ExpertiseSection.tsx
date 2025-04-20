import React from "react";

export interface ExpertiseSectionProps {
  title: string;
  description: string;
  items: string[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <div className="flex-1 text-white p-4">
      <h3 className="text-3xl font-bold mb-2 text-silver">{title}</h3>
      <p className="text-gray-400 text-[20px] mb-2">{description}</p>
      <ul className="list-disc list-inside text-gray-300 text-[20px]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertiseSection;
