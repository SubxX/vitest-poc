import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { test, expect } from "vitest";

test("Render sidebar", () => {
  const routeItems = [
    { href: "/1", label: "First route" },
    { href: "/2", label: "Second route" },
    { href: "/3", label: "Third route" },
  ];
  render(<Sidebar items={routeItems} />);
  const linkElements = screen.getAllByRole("navigation");
  routeItems.forEach((route, idx) => {
    expect(linkElements[idx]).toHaveAttribute("href", route.href);
    expect(linkElements[idx]).toHaveTextContent(route.label);
  });
});
