import { Button } from "@/shared/ui/button";
import { ReactNode } from "react";

type ButtonMode = "filled" | "text" | "secondary" | "disable";

const BaseButton = ({
  children,
  mode = "secondary",
  type = "button",
}: {
  children: ReactNode;
  mode?: ButtonMode;
  type?: "button" | "submit" | "reset";
}) => {
  const uiType = {
    filled:
      "bg-orange-400 shadow-none text-white active:bg-orange-500 focus:bg-orange-700 flex-1 ",
    text: "",
    secondary:
      "border bg-white border-orange-400 font-medium text-orange-400 shadow-none flex-1",
    disable:
      "border border-transparent shadow-none bg-zinc-200 text-zinc-400 hover:border hover:border-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 flex-1",
  };
  const btnUI = uiType[mode];

  return (
    <>
      <Button className={btnUI} type={type}>
        {children}
      </Button>
    </>
  );
};

export default BaseButton;
