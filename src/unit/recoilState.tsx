import { atom, selector } from "recoil";
import { IToDo } from "../type/todoType";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

//state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값을 말한다.
//getFunction 이 있어야 atom 을 받을수 있따.
// 시작은 빈배열1개 안에 원소로3개의 빈배열을 만들어준다 각 3개의 빈배열은 아래의 원소들로 채워진다.
// 배열의 첫번째 원소는 TO_DO 배열
// 배열의 두번쨰 원소는 DOING 배열
// 배열의 세번째 원소는 DONE 배열
export const toDoSelecter = selector({
  key: "todoSelecter",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((el) => el.category === "TO_DO"),
      toDos.filter((el) => el.category === "DOING"),
      toDos.filter((el) => el.category === "DONE"),
    ];
  },
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});
