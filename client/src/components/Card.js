import { Heading, HStack, Image, Text, VStack, Flex} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";

const Card = ({ title, description, imageSrc }) => {

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
      <VStack 
      className={`card-box drop-shadow fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      >
          <div id="card-img-container">
            <Image src={imageSrc}/>
          </div>
          <Heading size="md">{title}</Heading>
          <Text fontSize="md" className="card-text">{description}</Text>
          <p className="card-see-more">See more <span><FontAwesomeIcon icon={faArrowRight} size="1x" /></span></p>
        
      </VStack>
  );
};

export default Card;