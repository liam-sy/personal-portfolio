import React, { useState, useEffect, useRef } from "react";
import { Flex, Spacer, VStack, Stack, Heading, Divider, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const AboutMe = (props) => {

  const colors = props.colors;

  const [isVisible1, setVisible1] = useState(true);
  const [isVisible2, setVisible2] = useState(true);
  const domRef1 = useRef();
  const domRef2 = useRef();
  

  //check to see if the words are visible
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible1(entry.isIntersecting));
    });
    observer.observe(domRef1.current);
    return () => observer.unobserve(domRef1.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible2(entry.isIntersecting));
    });
    observer.observe(domRef2.current);
    return () => observer.unobserve(domRef2.current);
  }, []);

  

return (
  <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor={colors["base1"]}
      w={props.windowWidth}
      id="about-me-section"
      padding="2rem"
    >

  <Flex direction='column' gap='10'>

  <div className="highlight-wrapper" id="about-me-heading" style={{width: "13rem", bottom: "-5.7rem"}}>
        <div
        className={`highlighted-area ${isVisible1 ? 'is-visible' : ''}`}
        style={{backgroundColor: colors["dark2"]}}
        ref={domRef1}>
          <p style={{color: colors["dark2"]}}>.</p>
        </div>
      </div>

    <Heading size='xl' id="aboutme-heading" className="text-shadow" paddingLeft={"0.8rem"}>About Me</Heading>
    <Stack direction='row' h="100%">
      <Divider orientation='vertical' h='110px' borderColor={'black'}/>
      <Text fontSize='2xl' color="black" paddingLeft={"1.6rem"}>My name is Liam Young, I am an emerging full-stack developer with a focus on front-end development, 
      seeking entry-level opportunities to further enhance skills and expertise 
      in crafting exceptional and functional websites and web applications.
      </Text>
    </Stack>

    <Spacer />

    <div className="highlight-wrapper" id="philosophy-heading" style={{marginLeft: "auto", width: "14rem", bottom: "-5.7rem"}}>
        <div
        className={`highlighted-area ${isVisible2 ? 'is-visible' : ''}`}
        style={{backgroundColor: colors["dark2"]}}
        ref={domRef2}>
          <p style={{color: colors["dark2"]}}>.</p>
        </div>
      </div>

    <Heading size='xl' id="philosophy-heading" className="text-shadow" textAlign='right' paddingRight={"0.7rem"}>Philosophy</Heading>
    <Stack direction='row' >
      <Text fontSize='2xl' color="black" textAlign={"right"} paddingRight={"1.6rem"}>I believe in the continuous pursuit of knowledge and growth, 
      and my professional philosophy revolves around the synergy of innovation, 
      collaboration, and a commitment to excellence. I approach challenges with an open mind, 
      viewing them as opportunities for learning and improvement. Whether working independently or within a team, 
      I value effective communication and adaptability. With a foundation built on strong organizational and time 
      management skills, I am dedicated to creating impactful solutions in the realm of web development.
      </Text>
      <Divider orientation='vertical' h='200px' borderColor={'black'}/>
    </Stack>

    <a href={require("../docs/LYoung_Resume_WebDev.docx")} color="black" download>Here's my resume!</a>

  </Flex>

  </FullScreenSection>
);

};

export default AboutMe;