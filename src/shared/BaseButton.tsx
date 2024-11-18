import { Button } from "@/shared/ui/button";
import { ReactNode } from "react";

type ButtonType = "filled" | "text" | "secondary" | "disable";

const BaseButton = ({
  children,
  type = "secondary",
}: {
  children: ReactNode;
  type?: ButtonType;
}) => {
  const uiType = {
    filled:
      "bg-orange-400 shadow-none text-white active:bg-orange-500 focus:bg-orange-700 hover:",
    text: "",
    secondary:
      "border bg-white border-orange-400 font-medium text-orange-400 shadow-none",
    disable:
      "border border-transparent shadow-none bg-zinc-200 text-zinc-400 hover:border hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-100",
  };
  const btnUI = uiType[type];
  return (
    <>
      <Button className={btnUI}>{children}</Button>
    </>
  );
};

export default BaseButton;
