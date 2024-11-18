// 테스트를 위한 use client 서버액션을 이용해서 목데이터 가져옴 -> 수파베이스로 변경
"use client";
import { HowToStart } from "@/widgets/howToStart";

export default function Home() {
  return (
    <>
      {/* page / board 분류 하여*/}
      {/* 1. page 가 없을 경우 렌더링 분리*/}
      {/* 2. page가 있으나 board가 없을 경우 */}
      <HowToStart />
      {/* 있으면 여기서 목록 창 렌더*/}
    </>
  );
}
