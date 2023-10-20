import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Bloggit",
    description:
      "A personal blog that showcases your react projects, tutorials, and tips using Gatsby, a static site generator based on react.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Weather I Am",
    description:
      "A weather app that displays the current weather and forecast for any location using react hooks, axios, and the OpenWeatherMap API.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Everyone's First Project",
    description:
      "A todo list that allows you to create, edit, delete, and mark tasks as done using react, redux, and firebase for authentication and database.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Moving Pictures",
    description:
      "A movie search that lets you find and browse movies by title, genre, year, or rating using react, react-router, and the OMDb API.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects (examples)
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;