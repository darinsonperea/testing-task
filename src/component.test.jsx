import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Form from "./Form";

describe("Component render", () => {
  it("should render a text", () => {
    render(<Form />);
    const signInTitle = screen.getByTitle("Sign In");

    expect(signInTitle).toBeInTheDocument();
  });

  it("Should render two input in the document", () => {
    render(<Form />);

    const inputUsername = screen.getByLabelText("Username");
    const inputPassword = screen.getByLabelText("Password");

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  });

  it("Should render a button that says Sign In", () => {
    render(<Form />);

    const button = screen.getByText("Sign In");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sign In");
  });

  it("Should render a button that says Sign Up", () => {
    render(<Form />);

    const button = screen.getByText("Sign Up");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sign Up");
  });

  it("Should render a disabled link that says forgot password?", () => {
    render(<Form />);

    const link = screen.getByText("Forgot password?");

    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Forgot password?");
  });
});
