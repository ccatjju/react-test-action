import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("count start at 0", () => {
  render(<App />);
  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});

test("when plus button pressed, the counter change", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const countElement = screen.getByTestId("counter");
  expect(countElement).toHaveTextContent(1);
});

test("when on/off button pressed, check the change backgroundclor", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent on/off button, from being pressed when on/off butoon is click", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
