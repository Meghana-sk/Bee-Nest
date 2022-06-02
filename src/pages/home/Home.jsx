import { Box, Tabs, TabList, Tab } from "@chakra-ui/react";
import { PostCard } from "../../components";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems={"center"}
      gap={4}
      p={4}
      bg={"gray.100"}
    >
      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList>
          <Tab width={"50%"} p={4} minWidth={"300px"}>
            Trending
          </Tab>
          <Tab width={"50%"} p={4} minWidth={"300px"}>
            Filters
          </Tab>
        </TabList>
      </Tabs>
      <PostCard />
      <PostCard />
      <PostCard />
    </Box>
  );
};

export { Home };
