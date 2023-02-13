import { useSetRecoilState } from "recoil";
import { categories, IToDo } from "../type/todoType";
import { toDoState } from "../unit/recoilState";

// const sss = ["apple", "orange", "berry", "kiwi"];
// const target = 1;
// const ddd = sss.slice(0, target);
// const ccc = sss.slice(target + 1);
// const hhh = [...ddd, "dfg", ...ccc];

export default function Todo(props: IToDo) {
  //todo의 상태변경해주는 components
  //   const onClickTodo = (category: IToDo["category"]) => { category 의 타입을 타입스크립트를 사용해서 맞춰줄수도 있다.
  //   };

  const setToDos = useSetRecoilState(toDoState);

  const onClickTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }, // 태그의 name을 가져온다
    } = e;

    setToDos((prev) => {
      const currentTargetPosition = prev.findIndex((e) => e.id === props.id);

      //유저가 선택하는 todo의 id값과 props.id의 id값과 동일해야한다.
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
          {props.category !== categories.TO_DO && (
            // <button
            //   onClick={() => {
            //     onClickTodo("TO_DO"); // onClick함수에 인자값을 넣어야할때
            //   }}
            // >
            //   Todo
            // </button>
            <button name={categories.TO_DO} onClick={onClickTodo}>
              Todo
            </button>
          )}
          {props.category !== categories.DOING && (
            <button name={categories.DOING} onClick={onClickTodo}>
              Doing
            </button>
          )}
          {props.category !== categories.DONE && (
            <button name={categories.DONE} onClick={onClickTodo}>
              {" "}
              Done
            </button>
          )}
        </li>
      </div>
    </>
  );
}
