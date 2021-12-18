import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      ["*"]: {
        boxSizing: "content-box",
      },
    },
  },
});
