import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { test, expect, vi } from "vitest";

test("Renders button", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  const btnElement = screen.getByTestId("button");
  expect(btnElement).toBeEnabled();

  fireEvent.click(btnElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("Renders disabled button", () => {
  const onClick = vi.fn();
  render(
    <Button onClick={onClick} disabled={true}>
      Click me
    </Button>
  );
  const btnElement = screen.getByTestId("button");
  expect(btnElement).toBeDisabled();

  fireEvent.click(btnElement);
  expect(onClick).toHaveBeenCalledTimes(0);
});

test("Renders button loading state", () => {
  const onClick = vi.fn();
  render(
    <Button onClick={onClick} isLoading={true}>
      Click me
    </Button>
  );
  const btnElement = screen.getByTestId("button");
  expect(btnElement).toBeDisabled();

  fireEvent.click(btnElement);
  expect(onClick).toHaveBeenCalledTimes(0);

  expect(btnElement.querySelector("span.btn-loading")).toBeInTheDocument();
});
