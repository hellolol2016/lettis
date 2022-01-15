import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

export default function LettuceForm({}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch("/api/lettuce", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <VStack w={"100vw"}>
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} width={{base:"80vw",md:"40vw"}}>
        <Input name="Name" type="text" placeholder="Name" />
        <Input name="Type" type="text" placeholder="Type" />
        <Input name="Image" type="text" placeholder="Image URL" />
        <Textarea
          name="description"
          type="text"
          placeholder="Comment / Description"
        />

        <Button type="submit">Create Lettuce &#129388;</Button>
      </VStack>
      </form>
</VStack>
  );
}
