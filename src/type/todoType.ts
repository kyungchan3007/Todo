export interface IFormTodoValue {
  FirstName?: string;
  LastName?: string;
  UserName?: string;
  Password?: string;
  Password1?: string;
  Email?: string;
  ExtraError?: string;
}

export interface ITodoValue {
  toDo?: string;
  aaa?: string;
}

export type categories1 = "TO_DO" | "DOING" | "DONE" | "ALL"; // 반복하는 문자를 사용할때 이렇게 정의해줄수 있다.
export interface IToDo {
  text?: string;
  id: number;
  category?: categories;
}

export enum categories {
  "TO_DO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "ALL" = "ALL",
}
