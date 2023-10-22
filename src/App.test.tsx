import { render, screen } from "@testing-library/react";
import App from "./App";
import { test, expect } from "vitest";

test("render correctly", () => {
  render(<App />);
  const titleElement = screen.getByRole("heading");
  expect(titleElement).toBeInTheDocument();
});
