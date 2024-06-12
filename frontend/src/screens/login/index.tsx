import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../../hooks/useChannelContext";

export function Login() {
  const navigate = useNavigate();
  const { login } = useChannelContext();
  const [username, setUsername] = useState("");

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username);
          setUsername("");
          navigate("/channels");
        }}
      >
        <input
          type="text"
          placeholder="Digite seu username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
