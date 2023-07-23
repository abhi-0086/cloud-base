import CreateFolderModal from "@/components/Folder/CreateFolderModal";
import SideNavbar from "@/components/SideNavbar";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className="flex">
        <SideNavbar />
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="col-span-2">
            <Component {...pageProps} />
          </div>
          <div className="p-5 bg-white">Storage</div>
        </div>
      </div>
    </SessionProvider>
  );
}
