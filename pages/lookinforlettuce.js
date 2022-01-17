import { Button } from "@chakra-ui/button";
import { Box, Center, Link, Text, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import SearchForm from "../lib/SearchForm";

export default function Page({}) {
  return (
    <>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lettis - search" />
        <meta name="author" content="Dennis Wang" />
        <meta property="og:site_name" content="Lettis" />
        <title>Lettis - Search</title>
        <link rel="shortcut icon" href="/lettis.png" type="image/x-icon" />
      </Head>
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
          <Text>Tip: just type in "lettuce" in the search bar to see some examples (the search button isn't supposed to do anything ;))</Text>
          <SearchForm></SearchForm>
        </VStack>
      </Box>
    </>
  );
}
