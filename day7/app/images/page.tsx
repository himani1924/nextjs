'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface product{
    id: number,
    title: string,
    price: number,
    category: string,
    images: string[],
    description: string,
    rating: number
}

export default function ImageGallery() {
    const [products, setProducts] = useState<product[]>([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const result = await fetch('https:dummyjson.com/products')
                const res = await result.json()
                setProducts(res.products)
                
            }
            catch(err){
                console.error(err)
            }
        }
        fetchData()
    },[])

  return (
    <div>
        <h1 className="text-3xl text-bold mt-3 text-center">Products</h1>
        <div className="w-full mx-auto my-5 p-4 flex gap-2 flex-wrap place-content-around">        
          {products.map(({ id, category, images}) => (
            <div key={id}>
            <div>
      <div className="card-container border-2 border-gray-800 w-[400] h-[450] flex flex-col items-center justify-start overflow-auto p-10 text-center gap-y-10">
      <Image
      src={images[0]}
      alt="image"
      width={200}
      height={200}>

      </Image>
        <p>Category: {category}</p>
      </div>
    </div>

        </div>
          ))}   
      </div>
    </div>
  );
}
