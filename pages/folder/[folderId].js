import { useRouter } from "next/router";
import React from "react";

function FolderDetails() {
  const router = useRouter();
  const { name, id } = router.query;
  return <div>Folder details : {name}</div>;
}

export default FolderDetails;
