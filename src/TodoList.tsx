import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormTodoValue } from "./type/todoType";
const schema = yup.object({
  Email: yup
    .string()
    .min(10, "10자이상 적어주세여")
    .required("이메일은 필수입력사항 입니다"),
});

export default function TodoList() {
  //   const [todo, setTodo] = useState("");
  //   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //     const {
  //       currentTarget: { value },
  //     } = e;
  //     setTodo(value);
  //   };
  //   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log(todo);
  //   };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormTodoValue>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
      </form> */}
      <form>
        <input type="text" {...register("Email")} placeholder="이메일" />
        <div>{errors.Email?.message}</div>
        <input type="text" {...register("FirstName")} placeholder="성" />

        <input type="text" {...register("LastName")} placeholder="마지막이름" />

        <input type="text" {...register("UserName")} placeholder="유저이름" />

        <input type="text" {...register("Password")} placeholder="비밀번호" />

        <input
          type="text"
          {...register("Password1")}
          placeholder="비밀번호재입력"
        />

        <button>Add</button>
      </form>
    </>
  );
}
