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

test("if spinner is loading then payload should be true", () => {
  const newState = reducer(initialState, {
    type: "TOGGLE_LOADING"
  });

  expect(newState.isLoading).toEqual(true);
  expect(newState.percentage).toEqual(0);
  expect(newState.isComplete).toEqual(false);
});

test("if spinner is not loading then payload should be false", () => {
  const newState = reducer(initialState, {
    type: "TOGGLE_LOADING"
  });
  expect(newState.percentage).toEqual(0);
});

test("The reducer is given a specific update percentage value it is reflected in the state", () => {
  const newState = reducer(initialState, {
    type: "UPDATE_PERCENTAGE",
    payload: 60
  });
  expect(newState.percentage).toEqual(60);

  const newerState = reducer(initialState, {
    type: "UPDATE_PERCENTAGE",
    payload: 100
  });
  expect(newerState.percentage).toEqual(100);
  expect(newerState.isComplete).toEqual(true);
});
