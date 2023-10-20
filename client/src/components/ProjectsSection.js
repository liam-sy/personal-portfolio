import React, { useState, useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Amish Address Checker",
    description:
      "A python-based tool that can crosscheck and filter known Amish addresses, as well as plot them on a map for demographic research.",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Territory Node",
    description:
      "A web app that filters an address database by GIS-defined territories, using React, Node.js, Express, and PostgreSQL",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Everyone's First Project (example)",
    description:
      "A todo list that allows you to create, edit, delete, and mark tasks as done using react, redux, and firebase for authentication and database.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Moving Pictures (example)",
    description:
      "A movie search that lets you find and browse movies by title, genre, year, or rating using react, react-router, and the OMDb API.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = (props) => {

  const winWidth = props.windowWidth;

  return (
    <FullScreenSection
      backgroundColor="#3e4c5e"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      w={winWidth}
      id="projects-section"
    >
      <Heading as="h1" className="text-shadow">
        Featured Projects <span id="project-header-span">(examples)</span>
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={winWidth < 750 ? "repeat(1,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))"}
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