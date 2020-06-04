import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

<div>
  <Accordion>
    <AccordionItem>
      <AccordionHeader>
        <Box flex="1" textAlign="left">
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>

  <Alert status="error">
    <AlertIcon />
    <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
    <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
    <CloseButton position="absolute" right="8px" top="8px" />
  </Alert>

  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>

  <Text fontSize="xl" fontWeight="bold">
    Segun Adebayo
    <Badge ml="1" fontSize="0.8em" variantColor="green">
      New
    </Badge>
  </Text>

</div>;
