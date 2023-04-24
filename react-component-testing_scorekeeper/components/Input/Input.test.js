import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name" placeholder="placeholder" name="name" />);
  const inputToCheck = screen.getByLabelText("Name");

  expect(inputToCheck).toHaveAttribute("name", "name");
  expect(inputToCheck).toHaveAttribute("placeholder", "placeholder");
});

test("calls callback on every user input", async () => {
  const handleInput = jest.fn();
  const user = userEvent.setup();

  render(<Input onChange={handleInput} labelText="Name" name="name" />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "Let's check it");

  expect(handleInput).toHaveBeenCalledTimes(14);
});
