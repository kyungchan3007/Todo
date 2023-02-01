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
}

export interface IToDo {
  text?: string;
  id: number;
  category?: "TO_DO" | "DOING" | "DONE";
}
