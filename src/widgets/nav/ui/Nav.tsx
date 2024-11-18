import { PageList } from "@/features/pageList";
import { SearchBar } from "@/features/searchBar";

export const Nav = () => {
  return (
    <nav className="flex h-full w-full flex-col gap-3 border-x border-zinc-300 bg-white p-5 flex-1">
      <SearchBar />
      <h4 className="text-sm font-bold text-zinc-400">Park's</h4>
      <PageList />
    </nav>
  );
};
