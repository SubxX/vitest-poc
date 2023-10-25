import { render, screen } from "@testing-library/react";
import AppRoutes from "./app-routes";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

test("Routing test", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(screen.getByText(/welcome/i)).toBeDefined();

  // About us
  await user.click(screen.getByText(/about us/i));
  expect(screen.getByText(/about us page/i)).toBeDefined();

  // Faq us
  await user.click(screen.getByText(/faq/i));
  expect(screen.getByText(/faq page/i)).toBeDefined();

  // Blogs
  await user.click(screen.getByText(/blogs/i));
  const blogListing = screen.getByTestId("blog-listing");
  expect(blogListing).toBeDefined();

  const blogListItems = screen.getAllByTestId("blog-item");
  expect(blogListItems.length).toBeGreaterThanOrEqual(1);
  await user.click(blogListItems[0]);

  // Blog details
  const blogItem = screen.getByTestId("blog-single-item");
  expect(blogItem).toHaveTextContent("1");
});
