import { useToast } from "@chakra-ui/react";
import { useState, createState } from "@hookstate/core";
import { Persistence } from '@hookstate/persistence';
import { CartProductType, ProductType } from "@src/types/productType";

type CartStateType = {
  items: Array<CartProductType>;
};

export const cartState = createState<CartStateType>({
  items: [],
});

export const useCart = () => {
  const state = useState(cartState);

  if (typeof window !== "undefined") {
    state.attach(Persistence('plugin-persisted-data-key'))
  }

  const toast = useToast();

  const addToCart = (product: ProductType) => {
    const cartItemId = Date.now();
    state.items.merge([{ ...product, cartItemId }]);
    toast({
      title: `Added ${product.title} to the cart!`,
      status: "success",
      isClosable: true,
    });
  };

  const removeFromCart = (cartItemId: number) => {
    const currentState = state.items.get();
    const newCartItems = currentState.filter(
      (product) => product.cartItemId !== cartItemId
    );
    state.items.set(newCartItems);
    toast({
      title: `Removed from the cart!`,
      status: "success",
      isClosable: true,
    });
  };

  const cartTotalPrice = state.items
    .get()
    .reduce((acc, product) => acc + product.price, 0);

  const cartItems = state.items.get();
  const cartItemsCount = state.items.get().length;

  return {
    addToCart,
    removeFromCart,
    cartItems,
    cartTotalPrice,
    cartItemsCount,
  };
};
