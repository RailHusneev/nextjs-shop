import { ReactNode } from "react";
import { ProductType } from "./productType";

export type CategoryType = {
  id: number;
  title: string;
  description: string;
  items: ProductType[];
  icon: ReactNode;
};
