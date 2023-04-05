import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";

test("link in Navigation", () => {
  render(<Navigation />);
  const Link = screen.getByRole("link");
  expect(Link).toBeInTheDocument();
});
