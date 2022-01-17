import { Button, Center, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import LettuceForm from "../lib/LettuceForm";

export default function Page({}) {
  return (
    <>
      <VStack>
        <Text fontSize={50}>Create your lettuce!</Text>
        <LettuceForm></LettuceForm>
      </VStack>
    </>
  );
}
