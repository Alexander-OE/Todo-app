import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../../firebase";
const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    // CUWEP will return a promise, so await is used to get that promise

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("successful register");
      console.log(user);
      navigate("/todo");
      //   await addDoc(collection(db, 'todos'), {
      //     name: "Raja Tamil",
      //     country: "Canada"
      //   })
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    console.log("yo");
  };

  return (
    <div className={classes.container}>
      <h2>Register</h2>
      <div className={classes.action}>
        <input
          className={classes.input}
          placeholder="Email..."
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <input
          className={classes.input}
          placeholder="Password..."
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register} className={classes.btn}>
          Create user
        </button>
        <button className={classes.demo} onClick={()=>{navigate("/todo")}}>Demo</button>
        <p>
          If you have an existing account{" "}
          <Link to={"/login"} className={classes.login}>
            Login
          </Link>
        </p>

        
      </div>
     
    </div>
  );
};

export default SignUp;
