import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { ProductType } from "@src/types/productType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ProductItem } from "@components/productItem/productItem";

import { MdKeyboardArrowRight } from "react-icons/md";

type PropsType = {
  products: ProductType[];
  description: string;
  full_description: string;
  title: string;
};

export const Category: FC<PropsType> = ({
  products,
  full_description,
  description,
  title,
}) => {
  const PRODUCTS_IN_SLIDE = 12;

  if (products.length === 0) {
    return null;
  }

  return (
    <Box mb={10}>
      <Heading fontSize={22} mb={3}>
        {title}
      </Heading>

      <Text mb={10} noOfLines={3}>
        {description}
      </Text>

      <Box position="relative">
        <div className="productPrevButtonForSlider">
          <MdKeyboardArrowRight />
        </div>
        <div className="productNextButtonForSlider">
          <MdKeyboardArrowRight />
        </div>
      </Box>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={{
          nextEl: ".productNextButtonForSlider",
          prevEl: ".productPrevButtonForSlider",
        }}
        pagination={{ clickable: true }}
      >
        {[...new Array(PRODUCTS_IN_SLIDE).keys()].map((product, index) => (
          <SwiperSlide key={index}>
            <ProductItem product={products[0]} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Text mt={10} noOfLines={7}>
        {full_description}
      </Text>
    </Box>
  );
};
