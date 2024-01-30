import Navbar from "@/app/(marketing)/_components/navbar";
import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";

// Shows two buttons on the right side of the navbar, one for login and another for sign up.
describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("logo"); // If you have a data-testid on your logo
    expect(logo).toBeInTheDocument();
  });

  it("has a login link", () => {
    render(<Navbar />);
    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/sign-in");
  });

  it("has a sign-up link", () => {
    render(<Navbar />);
    const signUpLink = screen.getByRole("link", {
      name: /get taskify for free/i,
    });
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute("href", "/sign-up");
  });

  // Additional tests for buttons, styles, etc.
});
