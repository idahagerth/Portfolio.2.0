import { Flex, Button } from '@mantine/core';

function NavBar() {
  return (
    <Flex
      mih={50}
      //bg="rgba(0, 0, 0, .3)"
      gap="xl"
      justify="flex-start"
      align="flex-start"
      direction="row-reverse"
      wrap="wrap"
    >
      <Button variant="white" color="black" size="md">Github</Button>
      <Button variant="white" color="black" size="md">About / Contact</Button>
    </Flex>
  );
}

export default NavBar;