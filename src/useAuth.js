import { useState } from "react";

function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  function auth(username, password) {
    if (!username || !password) {
      return setError("Fields cannot be empty");
    }

    if (username === "admin" && password === "123") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("The credentials are wrong!!");
    }
  }

  return { authenticated, error, auth };
}

export default useAuth;
