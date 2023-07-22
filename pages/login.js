import { signIn } from "next-auth/react";
import React from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  return (
    <div className="flex justify-center items-center mt-[25%]">
      <button
        className="bg-blue-400 p-2 rounded-md px-3 text-white"
        onClick={() => signIn()}
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;
