'use client'

import React, { useContext , useState, useEffect} from 'react'
import { LoaderContext, useLoader } from '../context/loaderContext'
import Loader from '../components/Loader';

interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
}
const ProductsPage = () => {
    const {loading, setLoading} = useLoader()
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.error("Error fetching products:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, [setLoading]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Products</h1>
      {loading && <Loader/>} 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage