import { useSetRecoilState } from "recoil";
import { IToDo } from "../type/todoType";
import { toDoState } from "../unit/recoilState";

const food = ["피자", "파스타", "낙지볶음밥", "된장찌개"];

export default function Todo(props: IToDo) {
  //   const onClickTodo = (category: IToDo["category"]) => {
  //     console.log(category);
  //   };
  const setToDos = useSetRecoilState(toDoState);
  const onClickTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((prev) => {
      const currentTargetPosition = prev.findIndex((e) => e.id === props.id);
      //prev 의 인덱스 값과 props.id 의 인덱스값을 비교해서 수정해야할 인덱스값을 찾아온다
      //   const oldTodo = prev[currentTargetPosition];
      const newTodo = {
        text: props.text,
        id: props.id,
        category: name as any,
      }; // props와 똑같은 타입을 가지게 된다.

      return [
        ...prev.slice(0, currentTargetPosition),
        newTodo,
        ...prev.slice(currentTargetPosition + 1),
      ];
    });
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
            <button name="TO_DO" onClick={onClickTodo}>
              Todo
            </button>
          )}
          {props.category !== "DOING" && (
            <button name="DOING" onClick={onClickTodo}>
              DOING
            </button>
          )}
          {props.category !== "DONE" && (
            <button name="DONE" onClick={onClickTodo}>
              {" "}
              Done
            </button>
          )}
        </li>
      </div>
    </>
  );
}
