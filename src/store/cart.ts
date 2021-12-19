import { useToast } from "@chakra-ui/react";
import { useState, createState, none } from "@hookstate/core";
import { Persistence } from "@hookstate/persistence";
import { CartProductType, ProductType } from "@src/types/productType";


export const cartState = createState<CartProductType[]>([]);

export const useCart = () => {
  const state = useState(cartState);

  if (typeof window !== "undefined") {
    cartState.attach(Persistence('store'))
  }

  const toast = useToast();

  const addToCart = (product: ProductType) => {
    const cartItemId = Date.now();
    state.merge([{ ...product, cartItemId }]);
    toast({
      title: `Added ${product.title} to the cart!`,
      status: "success",
      isClosable: true,
    });
  };

  const removeFromCart = (cartItemId: number) => {
    state.keys.forEach((index) => {
      if (state[index].cartItemId.get() === cartItemId) {
        state[index].set(none);
      }
    });
    toast({
      title: `Removed from the cart!`,
      status: "success",
      isClosable: true,
    });
  };

  const cartTotalPrice = state
    .get()
    .reduce((acc, product) => acc + product.price || 0, 0);

  const cartItems = state.get();
  const cartItemsCount = state.get().length;

  return {
    addToCart,
    removeFromCart,
    cartItems,
    cartTotalPrice,
    cartItemsCount,
  };
};
