import React from 'react'

interface Product{
    id: number,
    title: string,
    price: number,
    category: string,
    images: string[],
    description: string,
    rating: number
}

const fetchProducts = async () => {
    const start = performance.now();
    const res = await fetch('https://dummyjson.com/products', { cache: 'force-cache' });
    const data = await res.json();
    const end = performance.now();
    console.log(`Fetch time: ${end - start}ms`);
    return data.products || [];
  };

const ProductsPage = async () => {
    
    
      const products = await fetchProducts()
      
  return (
    <div>
        {products.map(({id, category, description}:Product) => (
            <div key={id}>
            <div>
              <div className="card-container border-2 border-gray-800 w-[400] h-[450] flex flex-col items-center justify-start overflow-auto p-10 text-center gap-y-10">
              <p> {category}</p>
              <p> {description}</p>
              </div>
            </div>
        
                </div>
        ))}   
    </div>
  )
}

export default ProductsPage