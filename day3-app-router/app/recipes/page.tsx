"use client"
import { useEffect, useState } from "react";
type RecipeType = {
    id: number;
    name: string;
    prepTimeMinutes: number;
    servings: number;
}

const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<RecipeType[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes");

                if (!response.ok) {
                    throw new Error("no data");
                }

                const data = await response.json();
                setRecipes(data.recipes.slice(0, 10));

            } catch (error) {
                console.log(error);
            }
        }
        fetchRecipes();
    }, [])

    return (
     
            <div className="flex justify-center items-center p-4">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-200 border-b">
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Id</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Prep Time (Minutes)</th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe) => (
                            <tr key={recipe.id} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2 text-sm text-gray-700">{recipe.id}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{recipe.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{recipe.prepTimeMinutes}</td>
                                <td className="px-4 py-2 text-sm text-gray-700">{recipe.servings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        
    );
}
export default Recipes;
