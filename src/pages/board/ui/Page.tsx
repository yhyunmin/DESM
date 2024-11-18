import { BaseButton, BaseInput } from "@/shared";
import { Nav } from "@/widgets/nav/ui/Nav";
import { CalendarSearch } from "lucide-react";

export default function Page() {
  return (
    <>
      <main className="flex flex-col h-full w-[850px] bg-zinc-100">
        <section className="flex text-zinc-700 w-full h-fit p-4 pt-20 bg-white">
          {/* 타이틀 영역 to widget */}
          <div className="flex flex-col gap-2 w-full">
            <BaseInput
              placeholder="Enter the title"
              className=" p-2 w-full border-none shadow-none text-black text-5xl placeholder:text-5xl font-bold tracking-tighter ring-transparent"
            />
            <div className="flex gap-3 items-center">
              <p>0/0 Completed</p>
              <div className="w-60 h-2 bg-zinc-300 rounded-full"></div>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex gap-2 justify-start">
                <div className="flex items-center gap-2">
                  <p>From</p>
                  <BaseInput>
                    <CalendarSearch className="h-5 w-5 " strokeWidth={2.5} />
                  </BaseInput>
                </div>
                <div className="flex items-center gap-2">
                  <p>To</p>
                  <BaseInput>
                    <CalendarSearch className="h-5 w-5 " strokeWidth={2.5} />
                  </BaseInput>
                </div>
                <BaseButton type="secondary">View Timeline</BaseButton>
              </div>
              <BaseButton type="filled">Add new Board</BaseButton>
            </div>
          </div>
        </section>
        {/*  보드 렌더 링*/}
        {/*  0개일때*/}
        <div className="flex  w-full h-full items-center justify-center text-zinc-800">
          <div className="text-center flex flex-col justify-center items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight">
              There is no board yet
            </h2>
            <p className="font-medium tracking-tight">
              Click the button and start flashing!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
