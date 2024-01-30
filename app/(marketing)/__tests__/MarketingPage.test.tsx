import "@testing-library/jest-dom/";
import MarketingPage from "@/app/(marketing)/page";
import { render, screen } from "@testing-library/react";

describe("MarketingPage", () => {
  it("renders without crashing", () => {
    render(<MarketingPage />);
    expect(screen.getByText("No 1 task management")).toBeInTheDocument();
  });

  it("contains the main heading", () => {
    render(<MarketingPage />);
    expect(screen.getByText("Taskify helps team move")).toBeInTheDocument();
  });

  it("contains the secondary heading", () => {
    render(<MarketingPage />);
    expect(screen.getByText("work forward.")).toBeInTheDocument();
  });

  it("has the correct link to sign-up", () => {
    render(<MarketingPage />);
    const link = screen.getByRole("link", { name: /get taskify for free/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/sign-up");
  });
});
