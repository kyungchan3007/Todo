import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </>
  );
}
