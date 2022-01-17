import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack, Link, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useState } from "react";
export default function CarForm() {
  const [hits, setHits] = useState([]);

  const search = async (event) => {
    const q = event.target.value;
    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch("/api/search?" + params);
      const result = await res.json();
      setHits(result["lettuce"]);
    }
  };
  return (
    <>
      <HStack>

        <Input onChange={search} type="text" placeholder="Search Here!" value={"lettuce"} />
        <Text bg={"gray.200"} p={2} borderRadius={3}>&#128269;</Text>
      </HStack>
      <Table width={{ base:"90%",md:"50%"} } variant={"striped"} colorScheme={"gray"}>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {hits.map((thing) => {
            return (
              <Tr key={thing.id} borderRadius={5}>
                <Td><img src={thing.image} style={{"width":"60%"}}></img></Td>
                <Td>{thing.name}</Td>
                <Td>{thing.type}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
