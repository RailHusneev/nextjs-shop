import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

import { FiDollarSign } from "react-icons/fi";

type PropsType = {
  price: number;
};

export const Price: FC<PropsType> = ({ price }) => {
  return (
    <Flex alignItems="center" fontSize={14}>
      {price} <FiDollarSign />
    </Flex>
  );
};
