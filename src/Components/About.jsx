import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Link,
  Text,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import Typed from "react-typed";

export default function About() {
  const handleResume = () => {
    fetch("Shivam Mishra.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileUrl = window.URL.createObjectURL(blob);
        let file = document.createElement("a");
        file.href = fileUrl;
        file.download = "Shivam Mishra.pdf";
        file.click();
      });
    });
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      pt={10}
      id="About"
    >an
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Hi, I Am 
            </Text>
            <br />
            <Text
              as={"span"}
              size={{base: "md", md: "lg"}}
              position={"relative"}
              fontFamily={"calibri"}
              color={"blue.400"}
            >
              {" "}Shivam Mishra
            </Text>
            <br />
            <Text color={"blue.500"} as={"span"}>
              <Typed
                strings={[
                  "A Full-Stack Developer",
                  "A Tech-Enthusiast",
                  "A Bike Rider"
                ]}
                typeSpeed={150}
                backSpeed={25}
                loop
              ></Typed>
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            A Passionate Full-Stack Web Developer, Who Loves To Build Cool
            Projects And Work In A Team. with The Aim To Became A Prominent Developer  Using Skillset, Toolset and Mindset, & Always Learning New Things in Order
To Deliver Out Of The Box Solutions With Complete
Ownership.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleResume}
            >
              My Resume
            </Button>
            <Button rounded={"full"}>
              <Link
                style={{ textDecoration: "none" }}
                target={"_blank"}
                href="https://github.com/shivam-m-7?tab=repositories"
              >
                My Projects
              </Link>
            </Button>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button>
              <Link
                href="https://www.linkedin.com/in/shivam-mishra-sde"
                target={"_blank"}
              >
                <BsLinkedin />
              </Link>
            </Button>
            <Button>
              <Link href="https://twitter.com/ShivamM59787232?t=EuThQjtoFtCHkb7edngaug&s=08" target={"_blank"}>
                <BsTwitter />
              </Link>
            </Button>
            <Button>
              <Link href="https://github.com/shivam-m-7" target={"_blank"}>
                <BsGithub />
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} alignItems="center" justifyContent={"center"}>
        {colorMode == "dark" ? (
          <Image
            objectFit={"cover"}
            className="zoom"
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/RFdyZWTC/My-project-1-5.png"
            }
          />
        ) : (
          <Image
            alt={"Login Image"}
            className="zoom"
            objectFit={"cover"}
            width={["xs", "lg"]}
            height={["xs", "lg"]}
            src={
              "https://i.postimg.cc/yYMByzBw/My-project-1-2.png"
            }
          />
        )}
      </Flex>
    </Stack>
  );
}
