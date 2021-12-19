import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import { CartProductType } from "@src/types/productType";
import React, { FC } from "react";
import Image from "next/image";
import { Price } from "@components/price/price";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCart } from "@src/store/cart";

type PropsType = {
  product: CartProductType;
};

export const CartProductItem: FC<PropsType> = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <>
      <Flex justifyContent="space-between">
        <Flex>
          <Box mr={5}>
            <Image src={product.img} width={50} height={50} />
          </Box>
          <Box>
            <Text>{product.title}</Text>
            <Text>
              <Price price={product.price} />
            </Text>
          </Box>
        </Flex>
        <Box alignSelf="center" cursor="pointer">
          <MdRemoveShoppingCart
            onClick={() => removeFromCart(product.cartItemId)}
          />
        </Box>
      </Flex>
      <Divider />
    </>
  );
};
