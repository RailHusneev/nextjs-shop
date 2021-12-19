import React, { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button, Flex, Text, Icon } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

type PropsType = {};

export const UserWidget: FC<PropsType> = () => {
  const { data: session } = useSession();

  console.log("session", session);

  if (session) {
    return (
      <Button
        fontSize={14}
        alignItems="center"
        onClick={() => signOut()}
        size="sm"
      >
        <Icon as={FaUserCircle} fontSize={20} color="blue.500" />
        {session.user && <Text ml={2}>{session.user.name}</Text>}
      </Button>
    );
  }

  return (
    <Button
      colorScheme="blue"
      size={"sm"}
      lineHeight="unset"
      onClick={() => signIn()}
    >
      Log in
    </Button>
  );
};
