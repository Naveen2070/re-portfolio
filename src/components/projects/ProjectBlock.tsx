import React from "react";
import CircularGallery from "../animations/CircularGallery";
import blogImage from "../../assets/images/blog.png";
import foodyImage from "../../assets/images/foody.png";
import resumeImage from "../../assets/images/resume.png";

const dataportfolio = [
  {
    image: blogImage,
    text: "A tech blog",
    link: "https://blog-proj-eta.vercel.app/",
  },
  {
    image: foodyImage,
    text: "A foodie community site",
    link: "https://next-recipe-nine.vercel.app/",
  },
  {
    image: resumeImage,
    text: "Capstone project",
    link: "https://naveen2070.github.io/resume/",
  },
];

export const ProjectBlock = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        items={dataportfolio}
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
      />
    </div>
  );
};
