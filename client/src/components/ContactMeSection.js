import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { object, string} from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


const LandingSection = (props) => {

  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const winWidth = props.windowWidth;

  const formik = useFormik({
    initialValues: {firstName: '', email: '', type: '', comment: ''},
    onSubmit: values => {useSubmit(values)},
    validationSchema: object({
      firstName: string().required("Required").max(100, "Exceeded 100 characters. First and last name will be enough, maybe a short title :)"),
      email: string().email("Invalid email address").required("Required").max(100, "Exceeded 100 characters. Sorry!"),
      type: string().required("Required"),
      comment: string().required("Required").min(25, "Must be at least 25 characters. A brief description or statement will suffice").max(2000, "Exceeded 2000 characters. I'll get in touch and we can hash it out!"),
    }),
  });

  // Do multiple things for the full form onSubmit
  const runSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit();
    submit("dummyurl", formik.values)
  };

  // Show the success/error alert
  useEffect(() => {
    if (response && formik.values.firstName != "") {
      onOpen(
        (response.type === 'success' ? 'success' : 'error'),
        response.message,
      );

      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response]);

  const optionStyle = {backgroundColor: "#ffffff", color: "#000000"}
  
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#6a687a"
      py={16}
      spacing={8}
      className="contact-me-fullscreen"
      id="contact-me-section"
    >
      <VStack w={winWidth > 1024 ? 1024 : winWidth} p={16} alignItems="flex-start">
        <Heading as="h1" id="contact-me-header">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={runSubmit} >
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.type && formik.touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps("type")}>
                  <option style={optionStyle} value="">Select</option>
                  <option style={optionStyle} value="hireMe">Freelance project proposal</option>
                  <option style={optionStyle} value="openSource">
                    Open source consultancy session
                  </option>
                  <option style={optionStyle} value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl >
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
              type="submit" 
              id="submit-button"
              width="full"
              isDisabled={Object.keys(formik.errors).length > 0 ? true : false}>  
                {isLoading ? ". . .": "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );

};

export default LandingSection;