import CreateFolderModal from "@/components/Folder/CreateFolderModal";
import SideNavbar from "@/components/SideNavbar";
import Toast from "@/components/Toast";
import { ShowToastContext } from "@/context/ShowToastContext";
import "@/styles/globals.css";

import { SessionProvider } from "next-auth/react";
import { useState } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showToastMsg, setShowToastMsg] = useState("");
  return (
    <SessionProvider session={session}>
      <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
        <div className="flex">
          <SideNavbar />
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            <div className="col-span-2">
              <Component {...pageProps} />
            </div>
            <div className="p-5 bg-white">Storage</div>
          </div>
        </div>
        {showToastMsg ? <Toast msg={showToastMsg} /> : null}
      </ShowToastContext.Provider>
    </SessionProvider>
  );
}
