import Header from "./_components/header";
import type { ReactNode } from "react";

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header render={true} title={""} />
      {children}
    </>
  );
};
export default SubLayout;
