import "@testing-library/jest-dom/";
import MarketingPage from "@/app/(marketing)/page";
import { render, screen } from "@testing-library/react";

describe("MarketingPageComponent tests unit", () => {
  it("should render marketing page with correct elements", () => {
    render(<MarketingPage />);

    // Assert heading elements
    expect(screen.getByText("No 1 task management")).toBeInTheDocument();
    expect(screen.getByText("Taskify helps team move")).toBeInTheDocument();
    expect(screen.getByText("work forward.")).toBeInTheDocument();

    // Assert description text
    expect(
      screen.getByText(
        /Colaborate, manage projects, and reach new productivity peaks/i
      )
    ).toBeInTheDocument();

    // Assert button
    const button = screen.getByRole("link", {
      name: /get taskify for free/i,
    });
    expect(button).toBeInTheDocument();
  });
});
