import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdSettings, MdCheckCircle } from "react-icons/md";
import { Link } from "react-scroll";

const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Experience() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} id="Experience">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              My Experiences
            </chakra.h2>
            <Button
              size="md"
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              <Link
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Hire Me
              </Link>
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />1 years of
                  experience as a real estate Officer at Reliance Jio Infocomm Pvt. Ltd.
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />6 Months of
                  Internship as a .Net Developer.
                </ListItem>
                {/* <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Ran my own Ed-Tech for 1 year.
                </ListItem> */}
              </List>
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <Feature
          heading={"REAL ESTATE OFFICER"}
          text={
            "Have Worked As a Real Estate Officer At Reliance Jio Infocomm Pvt. Ltd. for a Year Executing Lease Deeds Handling Property Related Issues For The Company. "
          }
        />
        <Feature
          heading={".NET INTERN"}
          text={
            "INTERNED At OSD Solutions As a .Net Developer For 6 Months ,Working At School Management System Using TechStack Like C#, JavaScript, JQuery, AJAX, BootStrap, MySql."
          }
        />
        {/* <Feature
          heading={"Entrepreneurship"}
          text={
            "Ran an Ed-Tech for 1 successful year with the agenda of normalizing computer science in the rural ares."
          }
        /> */}
        <Feature
          heading={"Full-Stack Web Development"}
          text={
            "Build Few Projects Using TechStacks Like JS, Es6, ReactJs, ViteJs, MongoDB, Express, NodeJs. In Collaboration As Well As Individual."
          }
        />
      </Grid>
    </Box>
  );
}
