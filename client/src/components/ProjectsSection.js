import React, { useState, useEffect, useRef } from "react";
import FullScreenSection from "./FullScreenSection";
import { Text, Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
  title: "World Pizza Champions Website",
  description:
    "The World Pizza Champions team is a non-profit, multinational group made up of elite pizza professionals. And I was a main developer and designer for their website!",
  getImageSrc: () => require("../images/pizzachamps_shot.jpg"),
  link: "https://www.worldpizzachampions.com/"
  },
  {
    title: "Chefs Feeding Kids Website",
    description:
      "Chefs Feeding Kids is a non-profit that was founded to combat food insecurity and hunger among children by providing nutritious meals and promoting healthy eating habits. I'm currently working on this site!",
    getImageSrc: () => require("../images/cfk_shot.png"),
    link: "https://www.chefsfeedingkids.org/",
  },
  
  {
    title: "More Coming Soon!",
    description:
      "I'm always working on new projects and learning new skills. Come back later and see what's new!",
    getImageSrc: () => require("../images/construction.jpeg"),
    link: ""
  },
];

// {
//   title: "Amish Address Checker",
//   description:
//     "A python-based tool that can crosscheck and filter known Amish addresses, as well as plot them on a map for demographic research.",
//   getImageSrc: () => require("../images/photo1.png"),
// },
// {
//   title: "Territory Node",
//   description:
//     "A web app that filters an address database by GIS-defined territories, using React, Node.js, Express, and PostgreSQL",
//   getImageSrc: () => require("../images/photo2.jpg"),
// },
// {
//   title: "Everyone's First Project (example)",
//   description:
//     "A todo list that allows you to create, edit, delete, and mark tasks as done using react, redux, and firebase for authentication and database.",
//   getImageSrc: () => require("../images/photo3.jpg"),
// },
// {
//   title: "Moving Pictures (example)",
//   description:
//     "A movie search that lets you find and browse movies by title, genre, year, or rating using react, react-router, and the OMDb API.",
//   getImageSrc: () => require("../images/photo4.jpg"),
// },

const ProjectsSection = (props) => {

  const winWidth = props.windowWidth;
  const colors = props.colors;

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  //check to see if the words are visible
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);


  return (
    <FullScreenSection
      backgroundColor={colors["base2"]}
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      w={winWidth}
      id="projects-section"
    >

      <div className="highlight-wrapper">
        <div
        className={`highlighted-area ${isVisible ? 'is-visible' : ''}`}
        style={{backgroundColor: colors["dark2"]}}
        ref={domRef}>
          <p style={{color: colors["dark2"]}}>.</p>
        </div>
      </div>

      <Heading as="h1" className="text-shadow featured-projects-heading" paddingLeft={"0.8rem"}>
         Featured Projects
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
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;