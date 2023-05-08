import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form");
  expect(form).toHaveAccessibleName("Create a new game");
});

test("submits the correct form data when every field is filled out", async () => {
  const createGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={createGame} />);
  const nameOfTheGame = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button");

  await user.type(nameOfTheGame, "Tic Tac Toe");
  await user.type(playerNames, "Maria, David");
  await user.click(button);

  expect(createGame).toHaveBeenCalledTimes(1);
  expect(createGame).toHaveBeenCalledWith({
    nameOfGame: "Tic Tac Toe",
    playerNames: ["Maria", "David"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const createGame = jest.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={createGame} />);
  const nameOfTheGame = screen.getByLabelText("Name of game");
  const playerNames = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button");

  await user.type(playerNames, "Maria, David");
  await user.click(button);

  expect(createGame).not.toHaveBeenCalled();
});

/**
 * 
- To check the submitted form data, make sure to
  - mock the submit handle function first;
  - `await` all `userEvent`s
  - expect the mocked submit function `toHaveBeenCalledWith(submittedDataObject)`.
- To find the correct form of the submitted data you are expecting, you might have to check the call of `onCreateGame` in the [`GameForm.js`](components/GameForm/index.js) file.
 */
