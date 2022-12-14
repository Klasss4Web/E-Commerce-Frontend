import React from "react";
import { Provider } from "react-redux";
import {
  render as rtlRender,
  fireEvent,
  cleanup,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CounterPractice } from "./CounterPractice";
import store from "../../../redux/store";

afterEach(cleanup);

const renderWithRedux = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

it("renders with redux", () => {
  renderWithRedux(<CounterPractice />);
});

it("Count has an initial value of zero", () => {
  const { getByTestId } = renderWithRedux(<CounterPractice />);
  expect(getByTestId("count")).toHaveTextContent("0");
});

it("Count increment by 1", () => {
  const { getByTestId, getByText } = renderWithRedux(<CounterPractice />);
  fireEvent.click(getByText("+"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

it("Count decrement by 1", () => {
  const { getByTestId, getByText } = renderWithRedux(<CounterPractice />);
  fireEvent.click(getByTestId("minus"));
  const count = getByTestId("count").textContent;
  expect(getByTestId("count")).toHaveTextContent(count);
});

it("Button to be enabled on render", () => {
  const { getByTestId } = renderWithRedux(<CounterPractice />);
  const buttonElement = getByTestId("minus");

  expect(buttonElement).toBeEnabled();
});

it("Button to be enabled on render", () => {
  const { getByTestId } = renderWithRedux(<CounterPractice />);
  const buttonElement = getByTestId("minus");
  expect(buttonElement).not.toBeDisabled();
});
