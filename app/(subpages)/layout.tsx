import Header from "./_components/header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header render={true} title={""} />
      {children}
    </>
  );
};
export default Layout;
