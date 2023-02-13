import { useRecoilValue } from "recoil";
import {
  toDoSelecter,
  toDoSelecterView,
  categoryState,
} from "../unit/recoilState";
import { categories } from "../type/todoType";
import Todo from "./Todo";

export default function TodoAllList() {
  const to = useRecoilValue(toDoSelecter);
  const [toDos, ing, done] = useRecoilValue(toDoSelecterView);
  const category = useRecoilValue(categoryState);

  return (
    <>
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
