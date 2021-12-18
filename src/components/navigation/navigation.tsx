import React, { FC } from "react";
import { Flex, Link } from "@chakra-ui/react";
import { NAV_LINKS } from "@components/navigation/libs";

type PropsType = {};

export const Navigation: FC<PropsType> = () => {
  return (
    <Flex maxW={250} width={"100%"} justifyContent="space-between">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          color="blue.400"
          fontWeight="medium"
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </Flex>
  );
};
