import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryState,
  toDoSelecter,
  toDoSelecterView,
} from "../unit/recoilState";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { categories } from "../type/todoType";

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

  const to = useRecoilValue(toDoSelecter); // categoty별
  const [toDos, ing, done] = useRecoilValue(toDoSelecterView); // categoryAll
  const [category, setCategory] = useRecoilState(categoryState); // select value 값을 Recoil 이랑 연결
  //select value 값을 Recoil 이랑 연결하고 선택되어지는 value 값으로 Recoil의 값을 변형 시켜준다 변경된 값은 category전달되어지고
  //category 상태값의 따라 태그가 나뉘게 된다.
  const selectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value }, //태그의 name을 가져온다
    } = e;
    setCategory(value as any);
    // 타입스크립트는 option 태그에 value가 categories 타입과 같다는걸 알지 못하기 때문에 타입을 명시해줘야한다.
  };

  return (
    <>
      <h1>TodoList</h1>
      <hr />
      <select value={category} onInput={selectChange}>
        <option value={categories.ALL}>All</option>
        <option value={categories.TO_DO}>Todo</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateTodo />

      {category !== categories.ALL ? (
        <>
          {to.map((el) => (
            <Todo key={el.id} {...el}></Todo>
          ))}
        </>
      ) : (
        <>
          <ul>
            <h2> To Do </h2>
            {toDos.map((el) => (
              <Todo key={el.id} {...el} />
            ))}
          </ul>
          <hr />
          <h2> Doing </h2>
          <ul>
            {ing.map((el) => (
              <Todo key={el.id} {...el}></Todo>
            ))}
          </ul>
          <hr />
          <h2>DONE</h2>
          <ul>
            {done.map((el) => (
              <Todo key={el.id} {...el}></Todo>
            ))}
            <hr />
          </ul>
        </>
      )}
    </>
  );
}
