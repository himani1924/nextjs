import React from 'react'

interface product{
    id: number,
    title: string,
    price: number,
    category: string,
    images: string[],
    description: string,
    rating: number
}

interface ProductProps{
    products: product[]
}


const ProductsStaticProps:React.FC<ProductProps> = ({products}) => {
  return (
    <div>
        <h1>List of Products with getServerSideProps</h1>
        <div className="container flex flex-wrap mx-20 flex-row w-full"></div>
        {
            products.map((product:product)=>{
                return <div key={product.id} className='border-2 gap-3 w-1/2 m-10 p-5  hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                    <h2 className='text-xl font-bold hover:text-accent focus:text-accent'>{product.title}</h2>
                    <p className='mb-2'>Price: {product.price}</p>
                    <span className='bg-green-300 py-1 px-2 rounded-full'>{product.category}</span>
                    <p className='mt-2'>{product.description}</p>
                    <p>{product.rating}</p>
                </div>
            })
        }
    </div>
  )
}

export default ProductsStaticProps

export async function getServerSideProps(){
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json() 

    return {
        props:
            {products: data.products}
        
    }
}