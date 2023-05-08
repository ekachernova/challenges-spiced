import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Anna" score="0" />);

  const score = screen.getByText("0");
  const player = screen.getByText("Anna");
  const buttonsToCheck = screen.getAllByRole("button");

  expect(score).toBeInTheDocument();
  expect(player).toBeInTheDocument();
  expect(buttonsToCheck).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const onPlus = jest.fn();
  const onMinus = jest.fn();
  const user = userEvent.setup();

  render(<Player name="Anna" score="0" onIncreasePlayerScore={onPlus} />);
  const plusButton = screen.getByRole("button", { name: "Increase Score" });
  const minusButton = screen.getByRole("button", { name: "Decrease Score" });
  await user.click(plusButton);
  expect(onPlus).toHaveBeenCalledTimes(1);
  await user.click(minusButton);
  expect(onMinus).toHaveBeenCalledTimes(0);
});
