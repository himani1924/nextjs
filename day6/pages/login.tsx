"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (status === "authenticated") {
      //for countdown
      const interval = setInterval(() => {
        setCountdown((prev) => (prev - 1));
      }, 1000);
      // to redirect
      setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Checking authentication...</p>;
  }
  if (status === "unauthenticated") {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        Sign in with Google
      </button>
    );
  }
  return (
    <div>
      <p>Welcome, {session?.user?.name}!</p>
      <p>Already logged in, Redirecting you in {countdown} seconds...</p>
      <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer mt-2" onClick={() => signOut({ callbackUrl: "/" })}>
        Sign out
      </button>
    </div>
  );
}