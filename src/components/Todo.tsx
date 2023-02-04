import { IToDo } from "../type/todoType";

export default function Todo(props: IToDo) {
  return (
    <>
      <div>
        <li key={props.id}>
          {props.text} {props.id}
          <button>Todo</button>
          <button>Doing</button>
          <button>Done</button>
        </li>
      </div>
    </>
  );
}
