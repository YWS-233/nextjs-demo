import Navbar from "./navbar";
import Footer from "./footer";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-100px)]">{children}</main>
      <Footer />
    </>
  );
}
