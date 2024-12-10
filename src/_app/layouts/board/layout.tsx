import { LayoutProps } from "@/_app/config/type";
import Header from "@/widgets/header/ui/Header";

export const BoardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
