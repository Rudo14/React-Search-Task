import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import ProductContent from "../components/ProductContent";
import { ProductContext } from "../context/productContext";
import { getProductsAction } from "../context/productAction";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ProductContainer: React.FC = () => {
  const { dispatch, state } = React.useContext(ProductContext);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    getProductsAction(dispatch, {});
  }, [dispatch]);

  useEffect(() => {
    if (state.products.error) {
      setOpenSnackbar(true);
      setError("An error occurred while searching.");
    } else {
      setOpenSnackbar(false);
      setError(null);
    }
  }, [state.products.error]);

  return (
    <Container>
      <ProductContent products={state.products.data} />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleSnackbarClose}
        >
          {error}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default ProductContainer;
