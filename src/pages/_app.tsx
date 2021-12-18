import { NextPage } from "next";
import { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/bundle";

import "@src/styles/global.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { CommonLayout } from "@components/layout/common/common";
import { theme } from "@src/libs/theme";

export const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </ChakraProvider>
  );
};

export default MyApp;
