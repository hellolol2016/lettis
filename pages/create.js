import { Button, Center, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import LettuceForm from "../lib/LettuceForm";

export default function Page({}) {
  return (
    <>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lettis - create" />
        <meta name="author" content="Dennis Wang" />
        <meta property="og:site_name" content="Lettis" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../public/lettis.jpg" />
        <link rel="shortcut icon" href="/lettis.png" type="image/x-icon" />
        <title>Lettis - Create</title>
      </Head>
      <VStack>
        <Text fontSize={50}>Create your lettuce!</Text>
        <LettuceForm></LettuceForm>
      </VStack>
    </>
  );
}
