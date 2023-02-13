import { useRecoilValue } from "recoil";
import { ISelector } from "../type/todoType";
import { categories } from "../type/todoType";
import { categoryState } from "../unit/recoilState";

export default function TodoSelector(props: ISelector) {
  const category = useRecoilValue(categoryState);
  return (
    <>
      <select value={category} onInput={props.selectChange}>
        <option value={categories.ALL}>All</option>
        <option value={categories.TO_DO}>Todo</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
    </>
  );
}
