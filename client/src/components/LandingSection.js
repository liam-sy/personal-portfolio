import React from "react";
import { Heading, VStack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Liam!";
const bio1 = "A junior developer";
const bio2 = "learning React";
const profilePhoto = require("../images/photo5.jpg")

function DesktopView() {
  return (
  <HStack>
  <img src={profilePhoto} id="profile-photo" className="drop-shadow"/>
  <VStack paddingLeft={"2rem"}>
    <Heading size='md' id="name-heading" className="text-shadow">{greeting}</Heading>
    <Heading className="text-shadow">{bio1}</Heading>
    <Heading className="text-shadow">{bio2}</Heading>
  </VStack>
  </HStack>
  );
};

function MobileView() {
  return (
  <p>.</p>
  );
};

const LandingSection = (props) => (

  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor={props.colors["base2"]}
    w={props.windowWidth}
  >


  <HStack>
  
  <VStack >
  <img src={profilePhoto} id="profile-photo" className="drop-shadow"/>
    <Heading size='md' id="name-heading" className="text-shadow">{greeting}</Heading>
    <Heading className="text-shadow">{bio1}</Heading>
    <Heading className="text-shadow">{bio2}</Heading>
  </VStack>
  </HStack>
  </FullScreenSection>
);

export default LandingSection;