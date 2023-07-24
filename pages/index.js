import { app } from "@/Config/FirebaseConfig";
import FileList from "@/components/File/FileList";
import FolderList from "@/components/Folder/FolderList";
import SearchBar from "@/components/SearchBar";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [folderList, setFolderList] = useState([]);
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getFolderList();
      console.log(session);
    }
  }, [session]);

  const getFolderList = async () => {
    setFolderList([]);
    const q = query(
      collection(db, "Folders"),
      where("createdBy", "==", session.user.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, "=>", doc.data());
      setFolderList((folderList) => [...folderList, doc.data()]);
    });
  };
  return (
    <div className="p-5">
      <SearchBar />
      <FolderList folderList={folderList} />
      <FileList />
    </div>
  );
}
