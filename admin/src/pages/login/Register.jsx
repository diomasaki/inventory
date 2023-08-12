import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { register } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { isFetching, error2 } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let visible = true;
  const handleVisibility = () => {
    visible = !visible;
    if (visible === true) {
      document.getElementById("pass").setAttribute("type", "text");
    } else {
      document.getElementById("pass").setAttribute("type", "password");
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
    history("/login");
  };

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
          fontWeight: "normal",
          fontFamily: "sans",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        Admin Register
      </h1>
      <input
        style={{
          padding: 10,
          marginBottom: 20,
          border: "1px solid black",
          borderRadius: "2px",
        }}
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{
          padding: 10,
          marginBottom: 20,
          border: "1px solid black",
          borderRadius: "2px",
        }}
        placeholder="E-Mail"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{
          padding: 10,
          marginBottom: 20,
          border: "1px solid black",
          borderRadius: "2px",
        }}
        type="password"
        placeholder="Password"
        id="pass"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        style={{
          padding: 10,
          width: 100,
          zIndex: "333",
          border: "1px solid black",
        }}
        onClick={handleClick}
      >
        Register
      </button>
      {error2 && <span style={{ marginTop: "10px" }}>Empty Fields !</span>}
    </div>
  );
};

export default Register;
