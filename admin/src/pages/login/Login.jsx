import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const success = useSelector((state) => state.user.success);
  useEffect(() => {
    if (success) history("/");
  }, [success]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "teal",
          fontSize: "70px",
          textAlign: "center",

          fontWeight: "normal",
          fontFamily: "sans",
          paddingBottom: "10px",
        }}
      >
        Admin Login
      </h1>
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
      {error && <span style={{ marginTop: "10px" }}>Wrong Details !</span>}
    </div>
  );
};

export default Login;
