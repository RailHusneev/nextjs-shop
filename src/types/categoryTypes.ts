import { ReactNode } from "react";
import { ProductType } from "./productType";

export type CategoryType = {
  id: number;
  title: string;
  description: string;
  full_description: string;
  items: ProductType[];
  icon: ReactNode;
};
