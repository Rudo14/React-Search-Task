export interface IProduct {
    id: string,
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    price: number,
    rating: number,
    stock: number,
    images: string,
    thumbnail: string,
    title: string,
}

export type ProductContextStorageType = {
    products: IProduct[];
}

// Helper Type Function
export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          type: Key;
        }
      : {
          type: Key;
          payload: M[Key];
        };
  };
  