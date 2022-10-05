import classes from "./Todo.module.css";

// toggleComplete will be our function
const Todo = ({ todo, toggleComplete , deleteTodo}) => {



  console.log(todo);
  return (
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
  );
};
export default Todo;
