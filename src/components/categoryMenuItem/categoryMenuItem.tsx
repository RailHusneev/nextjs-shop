import React, { FC } from "react";
import { Box, Center, Text, Flex, Link } from "@chakra-ui/react";
import { CategoryType } from "@src/types/categoryTypes";

type PropsType = {
  category: CategoryType;
  onCategoryClick: (category: CategoryType) => void;
};

export const CategoryMenuItem: FC<PropsType> = ({
  category,
  onCategoryClick,
}) => (
  <Flex mb={3} padding="7px 20px" cursor="pointer" _hover={{ bg: "gray.100" }}>
    <Center w="30px" flexBasis="30px" fontSize={22} color="blue.400">
      {category.icon}
    </Center>
    <Box ml={4} onClick={() => onCategoryClick(category)}>
      <Text href="#" color="blue.500">
        {category.title}
      </Text>
      <Text noOfLines={1} fontSize={12}>
        {category.description}
      </Text>
    </Box>
  </Flex>
);
