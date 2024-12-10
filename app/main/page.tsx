import { useToggle } from "@/shared/hooks";

const Page = () => {
  const { onToggle, toggle } = useToggle();

  // 슈파베이스 서버액션으로 가져와서
  // toggle on

  return <>{toggle ? "있는 페이지" : "없는페이지"}</>;
};

export default Page;
