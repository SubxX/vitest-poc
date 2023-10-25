import { render, screen } from "@testing-library/react";
import AppRoutes from "./app-routes";
import { test, expect, describe, vi, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

vi.mock("../api/blog.api", () => ({
  getPosts: () =>
    new Promise((resolve) => {
      resolve([
        {
          id: 1,
          title: "His mother had always taught him",
          body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
          userId: 9,
          tags: ["history", "american", "crime"],
          reactions: 2,
        },
      ]);
    }),
}));

describe("Routing test", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  test("Home Routes testing", async () => {
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
    expect(blogListItems.length).toBe(1);
    await user.click(blogListItems[0]);

    // Blog details
    const blogItem = screen.getByTestId("blog-single-item");
    expect(blogItem).toHaveTextContent("1");
  });
});

describe("Invalid route test", () => {
  test("404 route", async () => {
    render(
      <MemoryRouter initialEntries={["/some-invalid-route"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    const invalidRoute = screen.getByTestId("404");
    expect(invalidRoute).toBeDefined();
  });
});
