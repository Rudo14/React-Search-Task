import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductContent from "../ProductContent";

describe("ProductContent", () => {
  const mockProducts = [
    {
      id: "1",
      title: "Product 1",
      brand: "Brand 1",
      category: "Category 1",
      description: "Description 1",
      discountPercentage: 10,
      price: 50,
      rating: 4.5,
      stock: 100,
      images: "test.url",
      thumbnail: "",
    },
    {
      id: "2",
      title: "Product 2",
      brand: "Brand 2",
      category: "Category 2",
      description: "Description 2",
      discountPercentage: 20,
      price: 75,
      rating: 4.0,
      stock: 80,
      images: "test.url",
      thumbnail: "",
    },
  ];

  const mockError = "Error Message";

  it("renders product list", async () => {
    render(<ProductContent products={mockProducts} />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    // Check that the product list is rendered
    const productList = screen.getByTestId("table-list");
    expect(productList).toBeInTheDocument();

    // Check that the products are displayed
    for (const product of mockProducts) {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.brand)).toBeInTheDocument();
      expect(screen.getByText(product.category)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(
        screen.getByText(product.discountPercentage.toString())
      ).toBeInTheDocument();
      expect(screen.getByText(product.price.toString())).toBeInTheDocument();
      expect(screen.getByText(product.rating.toString())).toBeInTheDocument();
      expect(screen.getByText(product.stock.toString())).toBeInTheDocument();
    }
  });
});
