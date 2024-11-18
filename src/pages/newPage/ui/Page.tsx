import { BaseButton } from "@/shared";
import { Nav } from "@/widgets/nav/ui/Nav";

export default function Page() {
  return (
    <>
      <div className="m-auto flex h-dvh max-w-[1137px] bg-zinc-100">
        <Nav />
        <main className="flex h-full w-[850px] items-center justify-center bg-zinc-100">
          <section className="flex flex-col gap-2 text-zinc-700">
            <h3 className="text-2xl font-bold tracking-tighter">
              How to start :
            </h3>
            <p>1. Create a page</p>
            <p>2. Add boards to page</p>
            <BaseButton type="secondary">Add New Page</BaseButton>
          </section>
        </main>
      </div>
    </>
  );
}
