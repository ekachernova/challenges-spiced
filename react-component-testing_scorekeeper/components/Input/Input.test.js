import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name" placeholder="placeholder" name="name" />);
  const inputToCheck = screen.getByLabelText("Name");

  expect(inputToCheck).toHaveAttribute("name", "name");
  expect(inputToCheck).toHaveAttribute("placeholder", "placeholder");
});

test("calls callback on every user input", async () => {});
