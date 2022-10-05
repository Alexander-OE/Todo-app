import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");

  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("successful login");
      console.log(user);
      navigate("/todo");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={classes.container}>
      <h2>SignIn</h2>
      <div className={classes.action}>
        <input
          className={classes.input}
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
        />
        <input
          className={classes.input}
          placeholder="Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>
      <button onClick={login} className={classes.btn}>
        Login
      </button>
      <p>
        Create an Account{" "}
        <Link to={"/"} className={classes.login}>
          SignUp
        </Link>
      </p>
      {/* <br />
          <button onClick={logout}>Sign out</button>  */}
    </div>
  );
};

export default Login;
