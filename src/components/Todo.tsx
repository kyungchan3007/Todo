import { useSetRecoilState } from "recoil";
import { IToDo } from "../type/todoType";
import { toDoState } from "../unit/recoilState";

export default function Todo(props: IToDo) {
  //   const onClickTodo = (category: IToDo["category"]) => {
  //     console.log(category);
  //   };
  const setToDos = useSetRecoilState(toDoState);
  const onClickTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
  };
  return (
    <>
      <div>
        <li key={props.id}>
          {props.text}
          {props.category !== "TO_DO" && (
            // <button
            //   onClick={() => {
            //     onClickTodo("TO_DO"); // onClick함수에 인자값을 넣어야할때
            //   }}
            // >
            //   Todo
            // </button>
            <button onClick={onClickTodo}></button>
          )}
          {props.category !== "DOING" && (
            <button onClick={onClickTodo}></button>
          )}
          {props.category !== "DONE" && <button onClick={onClickTodo}></button>}
        </li>
      </div>
    </>
  );
}
