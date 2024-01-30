import "@testing-library/jest-dom/";

import { render, screen } from "@testing-library/react";
import Footer from "../_components/footer";

describe("Footer", () => {
  it("should render a footer with correct elements", () => {
    render(<Footer />);

    // Verify that the footer exists
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();

    // Verify that the Logo component is rendered
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();

    // Verify that Privacy Policy and Terms of Service buttons are rendered
    const privacyButton = screen.getByText("Privacy Policy");
    const termsButton = screen.getByText("Terms of Service");
    expect(privacyButton).toBeInTheDocument();
    expect(termsButton).toBeInTheDocument();
  });

  it.skip("should navigate to Privacy Policy page when Privacy Policy button is clicked", () => {
    render(<Footer />);

    const privacyButton = screen.getByText("Privacy Policy");
    privacyButton.click();

    // Verify that the user is navigated to the Privacy Policy page
    expect(window.location.pathname).toEqual("/privacy-policy");
  });

  it.skip("should navigate to Terms of Service page when Terms of Service button is clicked", () => {
    render(<Footer />);

    const termsButton = screen.getByText("Terms of Service");
    termsButton.click();

    // Verify that the user is navigated to the Terms of Service page
    expect(window.location.pathname).toEqual("/terms-of-service");
  });
});
