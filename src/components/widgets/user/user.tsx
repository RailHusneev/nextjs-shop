import React, { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

type PropsType = {};

export const UserWidget: FC<PropsType> = () => {
  return (
    <Button colorScheme="blue" size={"sm"} lineHeight="unset">
      Log in
    </Button>
  );
  // return <FaUserCircle fontSize={24} />;
};
