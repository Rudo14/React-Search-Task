import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchComponent from "../SearchComponent/SearchComponent";

describe("SearchComponent", () => {
  it("renders search input & button", () => {
    render(<SearchComponent />);
    const searchButton = screen.getByTestId("search-button");
    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;

    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

    // Test input change
    fireEvent.change(searchInput, { target: { value: "iphone" } });
    expect(searchInput.value).toBe("iphone");

    // Test button click
    fireEvent.click(searchButton);
  });
});
