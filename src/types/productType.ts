export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  img: StaticImageData;
};

export type CartProductType = ProductType & { cartItemId: number };