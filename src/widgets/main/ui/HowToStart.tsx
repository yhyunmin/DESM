import { BaseButton, BaseInput } from "@/shared";

const HowToStart = () => {
  return (
    <main className="flex h-full w-[850px] items-center justify-center bg-zinc-100">
      <section className="flex flex-col items-center justify-center gap-2 text-zinc-700">
        <h3 className="text-2xl font-bold tracking-tighter">How to start :</h3>
        <p>1. Create a page</p>
        <p>2. Add boards to page</p>
        <BaseButton>Add New Page</BaseButton>
      </section>
    </main>
  );
};

export default HowToStart;
