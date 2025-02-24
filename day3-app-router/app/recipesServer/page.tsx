export const metadata ={
    title:"server component"
}

type RecipeType = {
    id: number;
    name: string;
    prepTimeMinutes: number;
    servings: number;
}

const Recipes: React.FC = async () => {

    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const recipes: RecipeType[] = data.recipes.slice(10, 20);

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