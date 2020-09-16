import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("The app", () => {
  it("renders the default ", () => {
    const { getByText } = render(<App />);
  });
});
