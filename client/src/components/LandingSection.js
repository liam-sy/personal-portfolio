import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Liam!";
const bio1 = "A junior developer";
const bio2 = "learning React";
const profilePhoto = require("../images/photo5.jpg")


const LandingSection = (props) => (

  

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2c3d55"
    w={props.windowWidth}
  >
  <VStack>
    <Avatar size='2xl' name='Liam' src={profilePhoto} className="drop-shadow"/>
    <Heading size='md' id="name-heading" className="text-shadow">{greeting}</Heading>
    <Heading className="text-shadow">{bio1}</Heading>
    <Heading className="text-shadow">{bio2}</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;