import Header from "../../_components/header";
import type { ReactNode } from "react";

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header render={true} title={""} />
      <div className="px-8 py-20 max-w-6xl mx-auto">{children}</div>
    </>
  );
};
export default SubLayout;
