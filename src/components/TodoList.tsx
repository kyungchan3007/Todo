import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { toDoSelecter, toDoState } from "../unit/recoilState";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

export const Error = styled.span`
  color: red;
`;

export default function TodoList() {
  // const [toDos, setTodos] = useRecoilState(toDoState);
  // // const value = useRecoilValue(toDoState); // 값을 가져오는 Recoilstate
  // // const modFn = useSetRecoilState(toDoState); // 값을 변경하는 Recoilstate
  // const { register, handleSubmit, setValue } = useForm<ITodoValue>({
  //   mode: "onChange",
  // });

  // const onValidation = async ({ toDo }: ITodoValue) => {
  //   setTodos((oldTodos) => [
  //     ...oldTodos,
  //     { text: toDo, id: Date.now(), category: "TO_DO" },
  //   ]); // Never[] typescript
  //   setValue("toDo", "");
  // };
  // const toDos = useRecoilValue(toDoState);
  // 배열안에 배열을 선택하고 싶으면 배열을 열구 순서대로 이름을 지정하면된다
  const [to, ing, done] = useRecoilValue(toDoSelecter);

  return (
    <>
      <h1>TodoList</h1>
      <hr />
      <CreateTodo />
      <h2> To Do </h2>
      <ul>
        {to.map((el) => (
          <Todo key={el.id} {...el} />
        ))}
      </ul>
      <hr />
      <h2> Doing </h2>
      <ul>
        {ing.map((el) => (
          <Todo key={el.id} {...el} />
        ))}
      </ul>
      <hr />
      <h2>DONE</h2>
      <ul>
        {done.map((el) => (
          <Todo key={el.id} {...el} />
        ))}
      </ul>
    </>
  );
}
