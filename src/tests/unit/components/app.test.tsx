import { render, screen } from "@testing-library/react";
import { App } from "@/components/App";

describe("App Component", () => {
  it("renders App with correct content", () => {
    const { getByRole } = render(<App />);

    const h1Element = screen.getByText("Hello World");
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveClass("bg-red-500");

    const button = getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });
});
