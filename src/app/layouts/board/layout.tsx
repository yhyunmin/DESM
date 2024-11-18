import { LayoutProps } from "@/app/config/type";
import { BaseInput } from "@/shared";
import { CalendarSearch } from "lucide-react";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex h-full w-[850px] bg-zinc-100">
      <section className="flex flex-col gap-2 text-zinc-700">
        <div>
          <h1 className="text-zinc-300 text-5xl">Enter Title Here</h1>
          <div className="flex gap-3 items-center">
            <p>0/0 Completed</p>
            <div className="w-60 h-2 bg-zinc-300 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <p>From</p>
            <BaseInput>
              <CalendarSearch className="h-5 w-5 " strokeWidth={2.5} />
            </BaseInput>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Layout;
