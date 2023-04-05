import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecesPage from ".";

test("all art pieces are displayed as a list", () => {
  render(<ArtPiecesPage />);
  const list = screen.getByRole("list", {});
  expect(list).toBeInTheDocument();
});
