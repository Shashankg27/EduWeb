import * as React from "react";
import { formimage } from "./../assets/index";
import { Box, Button, Image, Text, Flex, VStack } from "@chakra-ui/react";

const UpcomingEvents = () => {
  const Events = [
    {
      link: "/preplacement",
      knowMoreLink: "/preplacement", // Added a new link for "Know More"
      title: "Pre Placement Bootcamp 3.0",
      Image: formimage,
      desc: `The Pre-placement Bootcamp 3.0, organized by the T&P Cell BVCOE in collaboration with EduMinerva from 18th - 23rd March 2024, is designed to provide 3rd-year students with a comprehensive platform to address placement-related concerns and enhance employability skills. This year's bootcamp spans 6 days and includes Speaker Sessions, Aptitude & Coding Assessments, Mock Interviews, and interactions with senior professionals from reputed companies. Join us to gain valuable insights, enhance your skills, and prepare for your dream job!`,
    },
  ];

  return (
    <Box p={{ base: 2, md: 4 }}>
      <VStack spacing={{ base: 4, md: 6 }} align="stretch">
        {Events.map((event, index) => (
          <Flex
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="gray.800"
            p={{ base: 2, md: 4 }}
            align="center"
            direction={{ base: "column", md: "row" }} // Image left, text right on desktop
            w="100%"
          >
            <Image
              src={event.Image}
              alt={event.title}
              borderRadius="xl"
              objectFit="cover"
              // Updated image size for responsiveness
              boxSize={{ base: "100%", md: "30%" }}  // Full width on mobile, smaller on desktop
              height={{ base: "300px", md: "400px" }} // Adjust height for different screen sizes
              margin={"auto"}
            />
            <VStack
              align="center"
              spacing={2}
              p={{ base: 2, md: 4 }} // Adjust padding for mobile
              w={{ base: "100%", md: "50%" }}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl" }} // Reduced font size on mobile
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                {event.title}
              </Text>
              <Text
                color="gray.400"
                fontSize={{ base: "sm", md: "md" }} // Adjust font size for mobile
                textAlign="center"
              >
                {event.desc}
              </Text>
              <Flex
                direction={{ base: "column", md: "row" }} // Stack buttons vertically on mobile
                gap={2} // Add gap between buttons
                w="full"
              >
                <Button
                  as="a"
                  href={event.link}
                  colorScheme="teal"
                  size={{ base: "sm", md: "md" }} // Adjust button size for mobile
                  w={{ base: "full", md: "auto" }} // Full width on mobile, auto on desktop
                >
                  Register Now
                </Button>
                <Button
                  as="a"
                  href={event.knowMoreLink}
                  colorScheme="blue"
                  variant="outline"
                  size={{ base: "sm", md: "md" }} // Adjust button size for mobile
                  w={{ base: "full", md: "auto" }} // Full width on mobile, auto on desktop
                >
                  Know More
                </Button>
              </Flex>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default UpcomingEvents;