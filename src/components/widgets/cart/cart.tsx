import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

type PropsType = {};

export const CartWidget: FC<PropsType> = () => {
  return (
    <Flex alignItems={"center"} fontWeight="medium">
      <Box mr={2} color="blue.500">
        <FaShoppingCart />
      </Box>
      Basket
    </Flex>
  );
};
