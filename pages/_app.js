import SideNavbar from "@/components/SideNavbar";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SideNavbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
