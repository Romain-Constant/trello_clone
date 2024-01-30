import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";
import Footer from "../_components/footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("contains the logo", () => {
    render(<Footer />);
    const logo = screen.getByTestId("logo"); // Assuming you have a data-testid on your logo
    expect(logo).toBeInTheDocument();
  });

  it("has a privacy policy button", () => {
    render(<Footer />);
    const privacyButton = screen.getByRole("button", {
      name: /privacy policy/i,
    });
    expect(privacyButton).toBeInTheDocument();
  });

  it("has a terms of service button", () => {
    render(<Footer />);
    const termsButton = screen.getByRole("button", {
      name: /terms of service/i,
    });
    expect(termsButton).toBeInTheDocument();
  });

  // Additional tests for styles or other elements can be added here.
});
