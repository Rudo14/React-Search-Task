import React from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../context/product";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchComponent from "./SearchComponent/SearchComponent";

type ProductProps = {
  products: IProduct[];
};

const Product: React.FC<ProductProps> = ({ products }) => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength) + "...";
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchComponent />
        <TableContainer component={Paper} data-testid="table-list">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">DiscountPercentage</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Stock</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.brand}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">
                    {truncateText(row.description, 50)}
                  </TableCell>
                  <TableCell align="right">{row.discountPercentage}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.rating}</TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Product;
