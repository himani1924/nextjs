"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Table = styled.table`
  width: 100%;
  background:rgb(19, 124, 106);
  color: white;
  border-radius: 8px;
  text-align:center;
  border-collapse: collapse;
`;
const Td = styled.td`
  border: 1px solid white;
  padding: 8px;
  font-size: 18px;
`;
const Th = styled.th`
  border: 1px solid white;
  padding: 8px;
  font-size: 20px;`
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes");
                if (!response.ok) {
                    throw new Error("No data");
                }
                const data = await response.json();
                setRecipes(data.recipes.slice(0, 10));
            } catch (error) {
                console.log(error);
            }
        };
        fetchRecipes();
    }, []);
    return (
        <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <Table>
                <thead>
                    <tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Prep Time (Minutes)</Th>
                        <Th>Servings</Th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id}>
                            <Td>{recipe.id}</Td>
                            <Td>{recipe.name}</Td>
                            <Td>{recipe.prepTimeMinutes}</Td>
                            <Td>{recipe.servings}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Recipes;