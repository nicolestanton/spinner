import React from "react";
import { render } from "@testing-library/react";
import Spinner from "../Components/Spinner";

test("Check spinner exists on the page", () => {
  const { queryByTestId } = render(<Spinner />);
  expect(queryByTestId(/loading-spinner/i)).toBeTruthy();
});

test("correct percentage value is displayed", () => {
  const { getByTestId } = render(<Spinner percentage="50" />);
  expect(getByTestId(/spinner-value/i).textContent).toBe("50%");
});

test("should show 'Completed' if spinner is 100%", () => {
  const { getByTestId } = render(<Spinner isComplete="true" />);
  expect(getByTestId(/spinner-state/i).textContent).toBe("Completed");
});

test("should show 'Loading' if spinner is in a loading state", () => {
  const { getByTestId } = render(<Spinner isLoading="true" />);
  expect(getByTestId(/spinner-state/i).textContent).toBe("Loading");
});

test("should show 'Waiting' if spinner hasnt started yet", () => {
  const { getByTestId } = render(<Spinner percentage="0" />);
  expect(getByTestId(/spinner-state/i).textContent).toBe("Waiting");
});

test("should show correct value for spinner", () => {
  const { getByTestId } = render(
    <Spinner percentage="16" isLoading="true" isComplete="false" />
  );
  expect(getByTestId(/spinner-value/i).textContent).toBe("16%");
});

test("should show correct value for completed spinner", () => {
  const { getByTestId } = render(
    <Spinner percentage="100" isLoading="false" isComplete="true" />
  );
  expect(getByTestId(/spinner-value/i).textContent).toBe("100%");
  expect(getByTestId(/spinner-state/i).textContent).toBe("Completed");
});
