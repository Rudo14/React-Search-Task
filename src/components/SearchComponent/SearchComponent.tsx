import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { getProductsAction } from "../../context/productAction";
import { ProductContext } from "../../context/productContext";
import { Input } from "./styles.SearchComponent";

const SearchComponent = () => {
  const { dispatch } = React.useContext(ProductContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback(() => {
    getProductsAction(dispatch, { search: searchQuery });
  }, [searchQuery, dispatch]);

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ marginBottom: "10px" }}
    >
      <Input
        value={searchQuery}
        data-testid="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconButton
        onClick={handleSearch}
        data-testid="search-button"
        style={{
          backgroundColor: "#ccc",
          color: "#fff",
          padding: "5px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchComponent;
