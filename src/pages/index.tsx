import React, { FC, useState } from "react";

import { NextSeo } from "next-seo";
import { Category } from "@components/category/category";
import { Box, Flex, useToken } from "@chakra-ui/react";
import { CATEGORIES_FIXTURE } from "../fixtures/categoryFixtures";
import { CategoryMenuItem } from "@components/categoryMenuItem/categoryMenuItem";

type PropsType = {};

export const HomePage: FC<PropsType> = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES_FIXTURE[0]);
  const [gray100] = useToken("colors", ["gray.100"]);

  return (
    <>
      <NextSeo title="Home Page / Catalog" />

      <Flex as="section" w="100%">
        <Box
          width="30%"
          mr={50}
          borderRadius={5}
          border={`2px solid ${gray100}`}
          padding="10px 0"
        >
          {CATEGORIES_FIXTURE.map((category) => (
            <CategoryMenuItem
              key={category.id}
              category={category}
              onCategoryClick={setActiveCategory}
            />
          ))}
        </Box>

        <Box w="70%">
          <Category
            products={activeCategory.items}
            title={activeCategory.title}
            description={activeCategory.description}
          />
        </Box>
      </Flex>
    </>
  );
};

export default HomePage;
