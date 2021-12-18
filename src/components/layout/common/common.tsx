import { FC } from "react";
import { Header } from "@components/layout/common/header/header";
import { Content } from "@components/layout/common/content/content";

type PropsType = {};

export const CommonLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      {/* Footer */}
    </>
  );
};
