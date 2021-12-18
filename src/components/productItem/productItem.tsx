import React, { FC } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ProductType } from "@src/types/productType";
import Image from "next/image";
import { Price } from "@components/price/price";

type PropsType = {
  product: ProductType;
};

export const ProductItem: FC<PropsType> = ({ product }) => {
  return (
    <Box>
      <Image src={product.img} height="100%" width="100%" layout="responsive" />
      <Text fontWeight="medium" mt={2} fontSize={12}>
        {product.title}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Price price={product.price} />
        <Button colorScheme="blue" size="xs">
          Add
        </Button>
      </Flex>
    </Box>
  );
};
