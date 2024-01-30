import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../_components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

// Mock ClerkProvider and other Clerk components
jest.mock("@clerk/nextjs", () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  OrganizationSwitcher: () => <div>Mocked Organization Switcher</div>,
  UserButton: () => <div>Mocked User Button</div>,
}));

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    // Check for navbar presence
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("displays the logo on md and larger screens", () => {
    render(<Navbar />);
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("has a create button with text on md and larger screens", () => {
    render(<Navbar />);
    const createButton = screen.getByRole("button", { name: /create/i });
    expect(createButton).toBeInTheDocument();
  });

  it("has a create button with plus icon on smaller screens", () => {
    render(<Navbar />);
    const plusIcon = screen.getByTestId("Plus icon");
    expect(plusIcon).toBeInTheDocument();
  });

  it("contains a div with OrganizationSwitcher", () => {
    render(<Navbar />);
    const organizationSwitcher = screen.getByTestId("Organization switcher");
    expect(organizationSwitcher).toBeInTheDocument();
  });
});
