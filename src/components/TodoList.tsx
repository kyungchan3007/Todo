import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { toDoState } from "../unit/recoilState";
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
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <>
      <h1>Todo</h1>
      <hr />
      <CreateTodo />
      <ul>
        {toDos.map((el) => (
          <Todo key={el.id} {...el} />
        ))}
      </ul>
    </>
  );
}
