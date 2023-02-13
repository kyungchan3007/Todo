import { atom, selector } from "recoil";
import { categories, IToDo } from "../type/todoType";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<categories>({
  key: "category",
  default: categories.TO_DO,
});

//state를 입력 받아서 그걸 변형해 반환하는 순수함수를 거쳐 반환된 값을 말한다.
//getFunction 이 있어야 atom 을 받을수 있따.
// 시작은 빈배열1개 안에 원소로3개의 빈배열을 만들어준다 각 3개의 빈배열은 아래의 원소들로 채워진다.
// 배열의 첫번째 원소는 TO_DO 배열
// 배열의 두번쨰 원소는 DOING 배열
// 배열의 세번째 원소는 DONE 배열
// get function 은 selector 가 어떤 것을 반환할지를 결정한다.
// get 은 객체를 받아 오는데 getfunction 은 atom 을 가져올수있다.
export const toDoSelecter = selector({
  key: "todoSelecter",
  get: ({ get }) => {
    const toDos = get(toDoState); // todo들을 가져다가 categoryState에 맞는 toDo만을 걸러서 반환해준다.
    const category = get(categoryState); //값이 변경될때 마다 selecotr도 실행된다.
    return toDos.filter((el) => el.category === category);
  },
});

//전체 보이게 하는 배열
export const toDoSelecterView = selector({
  key: "todoSelecterView",
  get: ({ get }) => {
    const toDos = get(toDoState);
    // const category = get(categoryState);
    return [
      toDos.filter((el) => el.category === categories.TO_DO),
      toDos.filter((el) => el.category === categories.DOING),
      toDos.filter((el) => el.category === categories.DONE),
      toDos.filter((el) => el.category === categories.ALL),
    ];
  },
});
