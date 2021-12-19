import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Price } from "@components/price/price";
import { useCart } from "@src/store/cart";
import React, { FC } from "react";

type PropsType = {};

export const CartTotals: FC<PropsType> = () => {
  const { cartTotalPrice } = useCart();

  return (
    <>
      <Box m="10px 0">
        <Flex alignItems="center">
          <Text mr={1}>Discount:</Text> <Price price={0} />
        </Flex>
        <Flex alignItems="center">
          <Text mr={1}>Total:</Text> <Price price={cartTotalPrice} />
        </Flex>
      </Box>

      <Button colorScheme="blue" size="sm">
        Place order
      </Button>
    </>
  );
};
