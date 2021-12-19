import React, { FC } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "@hookstate/core";
import { useCart } from "@src/store/cart";
import { CartProductItem } from "@components/cartProductItem/cartProductItem";
import { CartTotals } from "@components/cartTotals/cartTotals";

type PropsType = {};

export const CartWidget: FC<PropsType> = () => {
  const { cartItemsCount, cartItems } = useCart();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const DrawerBodyInner = () =>
    cartItemsCount > 0 ? (
      <>
        {cartItems.map((product) => (
          <CartProductItem key={product.cartItemId} product={product} />
        ))}

        <CartTotals />
      </>
    ) : (
      <>Cart is Empty</>
    );

  return (
    <>
      <Button alignItems={"center"} fontWeight="medium" size="sm" onClick={onToggle}>
        <Box mr={2} color="blue.500">
          <FaShoppingCart />
        </Box>
        Basket ({cartItemsCount})
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <DrawerBodyInner />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
