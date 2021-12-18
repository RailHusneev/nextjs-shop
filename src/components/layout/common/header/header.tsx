import React, { FC } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Navigation } from "@components/navigation/navigation";
import { UserWidget } from "@components/widgets/user/user";
import { CartWidget } from "@components/widgets/cart/cart";
import Image from "next/image";

import Logo from "@assets/logo.svg";

type PropsType = {};

export const Header: FC<PropsType> = () => {
  return (
    <Container
      as="header"
      maxW="container.lg"
      margin="0 auto"
      padding="20px 10px"
    >
      <Flex width="100%" alignItems={"center"}>
        <Image width={90} height={30} src={Logo} />{" "}
        <Box ml={50} flex={1}>
          <Navigation />
        </Box>
        <Flex alignItems={"center"}>
          <Box mr={5}>
            <CartWidget />
          </Box>
          <UserWidget />
        </Flex>
      </Flex>
    </Container>
  );
};
