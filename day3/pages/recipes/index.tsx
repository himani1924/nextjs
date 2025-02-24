'use client'

import { useEffect, useState } from "react"

interface recipe{
    id: number,
    name: string,
    servings: number,
    prepTimeMinutes: number
}

const Page = () => {
    const [data, setData] = useState<recipe[]>([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const res = await fetch("https://dummyjson.com/recipes");
              const result = await res.json();
              setData(result.recipes.slice(0,10));
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          fetchData();
    },[])
    console.log(data);
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Top 10 Recipes</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Servings</th>
            <th className="border border-gray-300 p-2">Prep Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, servings, prepTimeMinutes }) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{id}</td>
              <td className="border border-gray-300 p-2">{name}</td>
              <td className="border border-gray-300 p-2">{servings}</td>
              <td className="border border-gray-300 p-2 text-center">{prepTimeMinutes} mins</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      
    </div>
    </div>
  )
}

export default Page