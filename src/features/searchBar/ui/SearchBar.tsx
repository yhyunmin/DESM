import { BaseButton, BaseInput } from "@/shared";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-zinc-400 " />
          <BaseInput
            placeholder="Search"
            className="pl-9 w-full h-full shadow-none p-1"
          />
        </div>
        <BaseButton>Add New Page</BaseButton>
      </div>
    </>
  );
};

export default SearchBar;
