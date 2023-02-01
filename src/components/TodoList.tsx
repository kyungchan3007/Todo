import { useForm } from "react-hook-form";
import { ITodoValue } from "../type/todoType";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "../unit/recoilState";

export const Error = styled.span`
  color: red;
`;

export default function TodoList() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  // const value = useRecoilValue(toDoState); // 값을 가져오는 Recoilstate
  // const modFn = useSetRecoilState(toDoState); // 값을 변경하는 Recoilstate
  const { register, handleSubmit, setValue } = useForm<ITodoValue>({
    mode: "onChange",
  });

  const onValidation = async ({ toDo }: ITodoValue) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { text: toDo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValidation)}>
        <input
          {...register("toDo", {
            required: "Please enter your todo",
          })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </>
  );
}
