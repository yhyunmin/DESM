import { Input } from "@/shared/ui/input";
import { ReactNode } from "react";

const BaseInput = ({
  className,
  children,
  placeholder,
  value,
}: {
  children?: ReactNode;
  placeholder?: string;
  className?: string;
  value?: string;
}) => {
  return (
    <>
      <div className="relative">
        <div className="absolute transform top-1/2 right-2 -translate-y-1/2 cursor-pointer select-none">
          {children}
        </div>
        <Input className={className} placeholder={placeholder} value={value} />
      </div>
    </>
  );
};

export default BaseInput;
