"use client";
import { signOut, useSession } from "next-auth/react";
import Login from "./login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
}
export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<Users[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 w-full ">
      {session ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {userData.map((user) => (
              <div key={user.id} className="border rounded-2xl shadow-lg p-4 w-[400] bg-white">
                <h2 className="text-lg font-semibold mt-3">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.email}</p>
                <p className="text-gray-600 text-sm">{user.username}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
          <button className=" w-1/4 px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer mt-4" onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
          </div>
          
        </>
      ) : ( <Login />)}
    </div>
  );
}