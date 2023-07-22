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
    <>
      <h1>Hello World</h1>
    </>
  );
}
