import { screen,render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load Contact Us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button inside contact Component",()=>{
    render(<Contact />);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
});
