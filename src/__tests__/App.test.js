import { reducer, initialState } from "../App";

test("Check percentage increases by 1", () => {
  const newState = reducer(initialState, { type: "UPDATE_PERCENTAGE" });
  expect(newState.percentage).toEqual(1);
});

test("correct percentage value is displayed when spinner is loading", () => {
  const newState = reducer(initialState, {
    type: "UPDATE_PERCENTAGE",
    payload: 10
  });
  expect(newState.percentage).toEqual(10);
});

test("if percentage is 100 then isCompleted is true", () => {
  const newState = reducer(initialState, {
    type: "IS_COMPLETE",
    payload: true,
    percentage: 100
  });
  expect(newState.isComplete).toEqual(true);
});

test("if percentage is less than 100 then isCompleted is true", () => {
  const newState = reducer(initialState, {
    type: "IS_COMPLETE",
    payload: false,
    percentage: 47
  });
  expect(newState.isComplete).toEqual(false);
});

test("if spinner is loading then payload should be true", () => {
  const newState = reducer(initialState, {
    type: "TOGGLE_LOADING",
    payload: true
  });
  expect(newState.isLoading).toEqual(true);
});

test("if spinner is not loading then payload should be false", () => {
  const newState = reducer(initialState, {
    type: "TOGGLE_LOADING",
    payload: false,
    percentage: 0
  });
  expect(newState.percentage).toEqual(0);
});
