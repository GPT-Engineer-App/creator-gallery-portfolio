import { Box, Container, Flex, Grid, GridItem, Heading, Image, Link, Text, VStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} color={textColor}>
      <Container maxW="container.xl">
        {/* Header */}
        <Flex py={8} justifyContent="space-between" alignItems="center">
          <Heading as="h1">Creative Portfolio</Heading>
          <Flex alignItems="center">
            <Link href="#gallery" mx={2}>
              Gallery
            </Link>
            <Link href="#projects" mx={2}>
              Projects
            </Link>
            <Link href="#contact" mx={2}>
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero Section */}
        <VStack spacing={4} as="section" py={20} textAlign="center">
          <Heading as="h2" size="2xl">
            Capturing Moments
          </Heading>
          <Text fontSize="xl">Explore the world through my lens. Discover my passion for photography and videography.</Text>
          <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYW1lcmF8ZW58MHx8fHwxNzA5MjE3MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" objectFit="cover" borderRadius="full" />
        </VStack>

        {/* Gallery Section */}
        <Box as="section" id="gallery" py={10}>
          <Heading as="h3" size="xl" mb={6}>
            Gallery
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="200px">
              <Image src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzA5MjE3MjY2fDA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="100%" h="100%" borderRadius="md" />
            </GridItem>
            <GridItem w="100%" h="200px">
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MDkyMTcyNjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="100%" h="100%" borderRadius="md" />
            </GridItem>
            <GridItem w="100%" h="200px">
              <Image src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5c2NhcGV8ZW58MHx8fHwxNzA5MjE3MjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="100%" h="100%" borderRadius="md" />
            </GridItem>
            {/* Additional images can be added here */}
          </Grid>
        </Box>

        {/* Projects Section */}
        <Box as="section" id="projects" py={10}>
          <Heading as="h3" size="xl" mb={6}>
            Projects
          </Heading>
          <VStack spacing={8}>
            <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h4" size="md">
                Project One
              </Heading>
              <Text mt={4}>A deep dive into urban photography.</Text>
            </Box>
            {/* Additional project boxes can be added here */}
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box as="section" id="contact" py={10}>
          <Heading as="h3" size="xl" mb={6}>
            Contact Me
          </Heading>
          <VStack spacing={4}>
            <Text>Let's create something amazing together.</Text>
            <Flex justify="center">
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} mx={1} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} mx={1} />
              <IconButton as="a" href="#" aria-label="Youtube" icon={<FaYoutube />} mx={1} />
              <IconButton as="a" href="#" aria-label="Email" icon={<FaEnvelope />} mx={1} />
            </Flex>
          </VStack>
        </Box>

        {/* Footer */}
        <Flex as="footer" py={6} justifyContent="center">
          <Text>&copy; {new Date().getFullYear()} Creative Portfolio. All Rights Reserved.</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
