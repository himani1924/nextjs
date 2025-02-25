'use client'
import { useState, useEffect, FormEvent } from "react";
import { Product } from "@/reducer/productAction"; 

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [newProd, setNewProd] = useState<Product | null>(null); 
  const [deleteId, setDeleteId] = useState<number | null>(null); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const fetchedProducts: Product[] = await res.json();
      setProducts(fetchedProducts); 
    };
    fetchProducts();
  }, []); 


  const addProductHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const price = parseFloat((form.elements.namedItem("price") as HTMLInputElement).value);
    const newProduct: Product = {
      id: Date.now(),
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      price: isNaN(price) ? 0 : price,
      description: (form.elements.namedItem("description") as HTMLInputElement).value,
    };
    setProducts([newProduct, ...products]); 
    setNewProd(null);
  };


  const handleDeleteProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (deleteId !== null) {
      setProducts(products.filter(product => product.id !== deleteId)); 
      setDeleteId(null); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Products</h1>

<div className="flex gap-5">
<form onSubmit={addProductHandler} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h2>
        <input type="text" placeholder="Product Name" name="title" id="title" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"/>
        <input type="text" placeholder="Product Price" name="price" id="price" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"/>
        <input type="text" placeholder="Product Description" name="description" id="description" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"/>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Add</button>
      </form>


      <form onSubmit={handleDeleteProduct} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Delete Product</h2>
        <input
          type="number"
          id="delete"
          placeholder="Enter product id"
          onChange={(e) => setDeleteId(parseFloat(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
        />
        <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
      </form>
</div>

      


      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Product List</h2>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}className="border-2 border-gray-700 my-3 p-3">
                <p>{product.id}</p>
                <strong className="text-2xl font-bold">{product.title}</strong> - ${product.price}
                <p>{product.description}</p>
              </li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
