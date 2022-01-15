import { Button } from "@chakra-ui/button";
import { Box, Center, Link, Text, VStack } from "@chakra-ui/layout";
import SearchForm from "../lib/SearchForm";

export default function Page({}) {
  return (
    <>

      <Link href="/">
        <Button pos={"absolute"} left={3} top={3}>
          Back Home{" "}
        </Button>
      </Link>

      <Box>
        <VStack>
          <Text fontSize={50} fontWeight={500}>
            Look for lettuce!
          </Text>
          <SearchForm></SearchForm>
        </VStack>
      </Box>
    </>
  );
}
