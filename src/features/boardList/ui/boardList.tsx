import BoardEmpty from "./boardEmpty";
import BoardItem from "src/features/boardList/ui/boardItem.tsx.backup";

const BoardList = () => {
  const testArray = ["1"];
  return <>{testArray.length === 0 ? <BoardEmpty /> : <BoardItem />}</>;
};

export default BoardList;
