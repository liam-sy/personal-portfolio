import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Rob! Please don't dock me any points for not being Pete";
const bio1 = "A React enthusiast ";
const bio2 = "who creates web interfaces";
const profilePhoto = require("../images/photo5.jpg")


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar size='xl' name='Pete' src={profilePhoto} />
    <p>{greeting}</p>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </VStack>
  </FullScreenSection>
);

export default LandingSection;