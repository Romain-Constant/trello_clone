import "@testing-library/jest-dom/";
import MarketingPage from "@/app/(marketing)/page";
import { render, screen } from "@testing-library/react";

describe("MarketingPageComponent tests unit", () => {
  it("should render a heading text with Taskify helps team move", () => {
    render(<MarketingPage />);
    const headingText = screen.getByText("Taskify helps team move");
    expect(headingText).toBeInTheDocument();
  });

  it("should render a div with No 1 task management", () => {
    render(<MarketingPage />);
    const medalText = screen.getByText("No 1 task management");
    expect(medalText).toBeInTheDocument();
  });

  it("should render a link component", () => {
    render(<MarketingPage />);
    const buttonElement = screen.getByRole("link");
    expect(buttonElement).toBeInTheDocument();
  });
});
