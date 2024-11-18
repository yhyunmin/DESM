import { Button } from "@/shared/ui/button";
import { ReactNode } from "react";

const BaseButton = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Button className="border bg-white border-orange-400 font-medium text-orange-400 shadow-none">
        {children}
      </Button>
    </>
  );
};

export default BaseButton;
