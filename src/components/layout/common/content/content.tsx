import React, { FC } from "react";
import { Container } from "@chakra-ui/react";

type PropsType = {};

export const Content: FC<PropsType> = ({ children }) => {
  return (
    <Container
      as="main"
      maxW="container.xl"
      margin="0 auto"
      padding="20px 10px"
    >
      {children}
    </Container>
  );
};
