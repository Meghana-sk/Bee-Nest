import { Flex, Button, Select } from "@chakra-ui/react";
import { BiTrendingUp } from "react-icons/bi";
import { NEWEST_FIRST, OLDEST_FIRST } from "../shared/variables";

const Filters = ({ trending, setTrending, sortBy, setSortBy }) => {
  return (
    <Flex
      gap={2}
      alignItems="center"
      bg="white"
      h="60px"
      borderRadius={"lg"}
      px="2"
      w="full"
      width={"50%"}
      p={4}
      minWidth={"300px"}
    >
      <Button
        w="80%"
        flexGrow={"1"}
        colorScheme={trending ? "purple" : "gray"}
        onClick={() => {
          setSortBy("");
          setTrending((prev) => !prev);
        }}
      >
        <BiTrendingUp size="sm" />
        Show trending
      </Button>
      <Select
        textAlign="center"
        cursor="pointer"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          setTrending(false);
        }}
        flexGrow={1}
        placeholder="Random"
        fontWeight={"700"}
      >
        <option value={`${NEWEST_FIRST}`}>Newest First</option>
        <option value={`${OLDEST_FIRST}`}>Oldest First</option>
      </Select>
    </Flex>
  );
};

export { Filters };
