import { useState } from "react";

const TodoContainer = () => {
  const [task, setTask] = useState("");
  const [arr, setArr] = useState([]);
  const [err, setError] = useState();
  const [inEdit, setInEdit] = useState(false);
  const [id, setId] = useState();

  const handleClick = () => {
    if (arr.includes(task)) {
      setError("Error");
    } else {
      setError();
      if (inEdit) {
        let newArr = [...arr];
        newArr.splice(id, 1, task);
        console.log(id);
        setArr(newArr);
        console.log(newArr);
        setInEdit(false);
      } else {
        setArr([...arr, task]);
        setTask("");
      }
    }
  };

  const handleEdit = (ele, id) => {
    setId(id);
    setInEdit(true);
    setTask(ele);
  };

  const handleDelete = (ele) => {
    setArr(arr.filter((element) => element !== ele));
  };

  return (
    <div className="todo-cotainer">
      <h1>Todo</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleClick}>{!inEdit ? "Add task" : "Edit"}</button>

      {arr.map((ele, id) => (
        <div className="task" key={ele}>
          <div>
            <span>{ele}</span>
            {!inEdit && (
              <button
                onClick={() => {
                  handleEdit(ele, id);
                }}
              >
                Edit
              </button>
            )}
            {!inEdit && (
              <button
                onClick={() => {
                  handleDelete(ele);
                }}
              >
                delete
              </button>
            )}
          </div>
        </div>
      ))}
      {err && <div>{err}</div>}
    </div>
  );
};

export default TodoContainer;
