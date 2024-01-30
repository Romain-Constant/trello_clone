import Navbar from "@/app/(marketing)/_components/navbar";
import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";

// Shows two buttons on the right side of the navbar, one for login and another for sign up.
describe("Navbar tests unit", () => {
  it("should render a navbar with correct elements", () => {
    render(<Navbar />);

    // Verify that the navbar exists
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();

    // Verify that the Logo component is rendered
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();

    // Verify that the Login and Get Taskify for free buttons are rendered
    const loginButton = screen.getByText("Login");
    const getTaskifyButton = screen.getByText("Get Taskify for free");
    expect(loginButton).toBeInTheDocument();
    expect(getTaskifyButton).toBeInTheDocument();
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
