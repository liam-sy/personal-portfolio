import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: liamsyoung@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/liam-sy",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/liam-young-798093217/",
  },
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const socialsTags = socials.map((item) => {
  return (<a key={item.url} href={item.url} className="a-tag-header" target="_blank"> <FontAwesomeIcon icon={item.icon} size="2x" /> </a>)
})

const Header = (props) => {

  const colors = props.colors;

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  //v// Header scrolling features --
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const boxElement = document.querySelector('.header-box');

      if (prevScrollY.current < currentScrollY && boxElement) {
        boxElement.style.transform = 'translateY(-200px)';
      } else if (boxElement) {
        boxElement.style.transform = 'translateY(0)';
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //^//

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor={colors["dark2"]}
      className="header-box"
      zIndex={10}
    >
      <Box color="white" maxWidth="1280px" margin="auto">
        <HStack
          px={4}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socialsTags}
          </nav>
          <nav>
            <HStack spacing={8}>
            <a href="#about-me" onClick={handleClick("about-me")}>About Me</a>
            <a href="#projects" onClick={handleClick("projects")}>Projects</a>
            <a href="#contact-me" onClick={handleClick("contact-me")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;