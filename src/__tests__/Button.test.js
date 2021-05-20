import React from "react";
import { render } from "@testing-library/react";
import Button from "../Components/Button";

test("Check spinner exists on the page", () => {
  const { queryByTestId } = render(<Button />);
  expect(queryByTestId(/button-text/i)).toBeTruthy();
});

test("Inital button text contains Start", () => {
  const { getByTestId } = render(<Button text="Start" />);
  expect(getByTestId(/button-text/i).textContent).toBe("Start");
});

test("should show Stop if button is pressed", () => {
  const { getByTestId } = render(<Button text="Stop" />);
  expect(getByTestId(/button-text/i).textContent).toBe("Stop");
});
