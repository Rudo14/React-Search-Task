import React from "react";
import axios from "axios";
import { ProductTypes, ProductActions } from "./productReducer";
import { IProduct } from "./product";

export const getProductsAction = (
  dispatch: React.Dispatch<ProductActions>,
  { search }: { search?: string }
) => {
  axios({
    url: `https://dummyjson.com/products${search ? `/search?q=${search}` : ""}`,
  })
    .then(
      (result: {
        data: {
          limit: number;
          products: IProduct[];
          skip: number;
          total: number;
        };
      }) => {
        dispatch({
          type: ProductTypes.GET_SUCCESS,
          payload: result.data.products,
        });
      }
    )
    .catch((error) => {
      dispatch({
        type: ProductTypes.GET_ERROR,
        payload: "An error occurred while fetching data.",
      });
    });
};
