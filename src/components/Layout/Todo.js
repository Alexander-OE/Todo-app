import classes from "./Todo.module.css";
// import { auth } from "../../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// toggleComplete will be our function
const Todo = ({ todo, toggleComplete , deleteTodo}) => {
// const navigate = useNavigate()
  // const unlogin = async () =>{
  //  try {
  //   await signOut(auth)
  //   navigate("/")
  //   console.log("sign outed");
  //  } catch (error) {
  //   console.log(error.message);
  //  }
  // }

  console.log(todo);
  return (
    <>
    {/* <button onClick={unlogin}>Sign OUt</button> */}
    <ul>
      <li className={` ${classes.li} ${todo.completed && classes.completed}`}  >
        <div className={classes.row}>
          <input onChange={() =>{toggleComplete(todo)}} type={"checkbox"} checked={todo.completed ? 'checked' : ''} />
          <p onClick={()=>{toggleComplete(todo)}} className={`${todo.completed ? classes.text.completed : classes.text}`}>{todo.text}</p>
        </div>
        <button onClick={()=> deleteTodo(todo.id)}>
          <i className={"fas fa-trash"} />
        </button>
      </li>
    </ul>
    </>
  );
};
export default Todo;
