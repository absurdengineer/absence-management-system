import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Leave Management System", () => {
  render(<App />);
  const linkElement = screen.getByText(/Leave Management System/i);
  expect(linkElement).toBeInTheDocument();
});
