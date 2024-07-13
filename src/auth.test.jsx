import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import useAuth from "./useAuth";
import { describe, expect, it } from "vitest";
import Form from "./Form";

describe("Custom Hook", () => {
  it("should authenticate with valid username and password", () => {
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.auth("admin", "123");
    });
    expect(result.current.authenticated).toBe(true);
    expect(result.current.error).toBe("");
  });

  it("should show error with invalid username or password", () => {
    const { result } = renderHook(() => useAuth());
    act(() => {
      result.current.auth("darinson", "asldsa");
    });
    expect(result.current.authenticated).toBe(false);
    expect(result.current.error).toBe("The credentials are wrong!!");
  });

  it("should show error when fields are empty", () => {
    render(<Form />);

    fireEvent.click(screen.getByText("Sign In"));

    expect(screen.getByText("Fields cannot be empty")).toBeInTheDocument();
    expect(screen.getByText("Fields cannot be empty")).toHaveTextContent(
      "Fields cannot be empty"
    );
  });
});
