import Navbar from "@/app/(marketing)/_components/navbar";
import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";

// Shows two buttons on the right side of the navbar, one for login and another for sign up.
describe("Navbar tests unit", () => {
  it("should render a navbar", () => {
    render(<Navbar />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("should show two buttons for login and sign up", () => {
    render(<Navbar />);
    const loginButton = screen.getByRole("link", { name: "Login" });
    const signUpButton = screen.getByRole("link", {
      name: "Get Taskify for free",
    });
    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  // The Link component fails to redirect to the correct page.
  it("should handle incorrect redirection of Link component", () => {
    render(<Navbar />);
    const loginButton = screen.getByRole("link", { name: "Login" });
    const signUpButton = screen.getByRole("link", {
      name: "Get Taskify for free",
    });
    expect(loginButton).toHaveAttribute("href", "/sign-in");
    expect(signUpButton).toHaveAttribute("href", "/sign-up");
  });
});
