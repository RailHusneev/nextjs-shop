import React, { FC } from "react";
import { Container, Divider, Flex, Link, Text } from "@chakra-ui/react";

import Image from "next/image";

import Logo from "@assets/logo.svg";

type PropsType = {};

export const Footer: FC<PropsType> = () => {
  return (
    <Container as="header" maxW="container.lg" margin="0 auto">
      <Divider />

      <Flex
        padding="20px"
        alignItems="center"
        justifyContent="space-between"
        fontSize={14}
      >
        <Image width={90} height={30} src={Logo} />

        <Text>© 2005-2021 John Doe All Rights Reserved</Text>

        <Flex w={430} alignItems="center" justifyContent="space-between">
          <Link href="#" color="blue.500">
            Contact us
          </Link>
          <Link href="#" color="blue.500">
            Refund policy
          </Link>
          <Link href="#" color="blue.500">
            Policy & Privacy
          </Link>
          <Link href="#" color="blue.500">
            Cookies agreement
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};
