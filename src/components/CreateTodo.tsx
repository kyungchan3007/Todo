import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { ITodoValue } from "../type/todoType";
import { toDoState } from "../unit/recoilState";

export default function CreateTodo() {
  const setTodos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<ITodoValue>({
    mode: "onChange",
  });

  const onValidation = async ({ toDo }: ITodoValue) => {
    setTodos((oldTodos) => [
      //리코일에서 받아오는 todo를 셋팅해준다
      // 이친구는 시작할때 빈배열이란것을 타입스크립트에 알려줘야한다.
      ...oldTodos, // 배열의 요소들을 전달
      { text: toDo, id: Date.now(), category: "TO_DO" },
      // 타입의 속성들을 나열
    ]); // Never[] typescript
    setValue("toDo", ""); //useForm 갹체의 기능 => 텍스트 입력 이벤트 이후 인풋창 상태를 빈값으로
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
    </>
  );
}
