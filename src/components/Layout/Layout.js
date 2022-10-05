import classes from "./Layout.module.css";
import { useState, useEffect } from "react";
import Todo from "./Todo";
// firebase
import { db } from "../../firebase";
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Layout = () => {
  const [todos, setTodos] = useState([]);
  // "learn React", "Grind Leetcode"
  const [input, setInput] = useState("");
 
  // ############





  // Create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input.length < 1) {
      alert("please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };


  // Read todo
  useEffect(() => {
    // q -> defines a path for our db
    const q = query(collection(db, "todos"));
    // snapshot -> this is like taking a picture of our db in firebase and reading it to use so we can render it on the screen
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = [];
      // the foreach is used to push each object in our array into the new array
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      // once we have our snapshot we want to set that to our state(todos)
      setTodos(todosArr);
      
    });
    return () => unsubscribe();
  }, []);

  // update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      // means we are changing the boolean value from false to true and vice visa
      completed: !todo.completed,
    });
  };

  // Deleted todo
  const deleteTodo = async (id) => {
    console.log(id);
    // if (input.length == '') {
    //   return null
    // }
    await deleteDoc(doc(db, "todos", id));
  };


// Sign out

const logOut = async () =>{
  try {
    await signOut(auth)
    console.log("Signed out!");
  } catch (error) {
    console.log(error.message);
  }
}

  return (
    <div className={classes.box}>
      <div className={classes.container}>
      <button onClick={logOut} className={classes.logout}>Sign Out</button>
        <h3 className={classes.heading}>Todo App</h3>
        <form action="" className={classes.form} onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className={classes.input}
            placeholder="Add Todo"
          />
          <button className={classes.button}>
            <i className={"fas fa-plus"} />
          </button>
          <div>
            {todos.map((todo, index) => {
              return (
                <Todo key={index} todo={todo} toggleComplete={toggleComplete}  deleteTodo={deleteTodo} />
              );
            })}
          </div>
          {todos.length < 1 ? null : (
            <p className={classes.count}>{`You have ${todos.length} todos`}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Layout;
