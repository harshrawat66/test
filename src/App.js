import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visibilty, setVisibilty] = useState("password");

  useEffect(() => {
    if (password.length < 4 && password != "") {
      setError("Password must be greater than 4 character");
      return;
    }
    setError("");
  }, [password]);

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handlePasswordVisibility = () => {
    if (visibilty === "text") {
      setVisibilty("password");
    } else {
      setVisibilty("text");
    }
  };

  return (
    <div className="App">
      <div className="form-card">
        <div className="card-body">
          <form className="form">
            <input
              type={visibilty}
              name="password"
              value={password}
              onChange={({ target: { value } }) => {
                handlePasswordChange(value);
              }}
            />
            <button type={"button"} onClick={handlePasswordVisibility}>
              Toggle Password Visibilty
            </button>
            <span>{error}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
