import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";
import Footer from "../_components/footer";

describe("Marketing Footer tests unit", () => {
  // Renders a fixed footer with a border at the bottom of the screen.
  it("should render a fixed footer with a border at the bottom of the screen", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should show two buttons on the right side of the footer", () => {
    render(<Footer />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Privacy Policy");
    expect(buttons[1]).toHaveTextContent("Terms of Service");
  });
});
