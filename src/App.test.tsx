import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "vitest";

test("Renders app", () => {
  render(<App />);
  const titleElement = screen.getByRole("heading");
  // expect(titleElement).toBeInTheDocument();
  // expect(titleElement).toHaveTextContent("Hello there");
  expect(titleElement).toHaveAttribute("role");
});
