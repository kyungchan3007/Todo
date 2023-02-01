import { atom } from "recoil";
import { IToDo } from "../type/todoType";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
