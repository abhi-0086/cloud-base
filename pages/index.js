import FileList from "@/components/File/FileList";
import FolderList from "@/components/Folder/FolderList";
import SearchBar from "@/components/SearchBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      console.log(session);
    }
  }, [session]);
  return (
    <div className="p-5">
      <SearchBar />
      <FolderList />
      <FileList />
    </div>
  );
}
