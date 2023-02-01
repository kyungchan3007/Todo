import { useForm } from "react-hook-form";
import { IFormTodoValue } from "./type/todoType";
import styled from "styled-components";

export const Error = styled.span`
  color: red;
`;
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
    formState: { errors },
  } = useForm<IFormTodoValue>({
    // resolver: yupResolver(schema),
    defaultValues: {
      Email: "@naver.com",
    },
    mode: "onChange",
  });

  const onValidation = async (data: IFormTodoValue) => {
    console.log(data);
  };

  return (
    <>
      {/* <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} placeholder="Write a to do" />
        <button>Add</button>
      </form> */}
      <form onSubmit={handleSubmit(onValidation)}>
        <input
          type="text"
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver.com 만가능합니다.",
            },
          })}
          placeholder="이메일"
        />
        {/* {errors.Email?.message} */}
        <Error>{errors.Email?.message}</Error>
        <input
          type="text"
          {...register("FirstName", {
            required: "First Name is required",
          })}
          placeholder="성"
        />
        <Error>{errors.FirstName?.message}</Error>
        <input
          type="text"
          {...register("LastName", {
            required: "Last name is required",
          })}
          placeholder="마지막이름"
        />
        <Error>{errors.LastName?.message}</Error>
        <input
          type="text"
          {...register("UserName", {
            required: "please enter a user name",
          })}
          placeholder="유저이름"
        />
        <Error>{errors.UserName?.message}</Error>
        <input
          type="text"
          {...register("Password", {
            required: "please enter your passwords",
            minLength: {
              value: 8,
              message: "password must be at least 8 characters long",
            },
          })}
          placeholder="비밀번호"
        />
        <Error>{errors.Password?.message}</Error>
        <input
          type="text"
          {...(register("Password1"), { required: true })}
          placeholder="비밀번호재입력"
        />
        <Error>{errors.Password1?.message}</Error>
        <button>Add</button>
      </form>
    </>
  );
}
