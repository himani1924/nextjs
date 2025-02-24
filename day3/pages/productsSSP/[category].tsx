import { GetServerSidePropsContext } from 'next';

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
    products: product[],
    category: string
}
const ProductsByCategory:React.FC<ProductProps> = ({products, category}) =>{
    return(
        <div>
            <h1 className='text-2xl font-bold text-center mt-3'>Products in {category}</h1>
            {
            products.map((product:product)=>{
                return <div key={product.id} className='border-2 gap-3 w-1/2 m-7 p-5'>
                    <h2 className='text-xl font-bold'>{product.title}</h2>
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

export default ProductsByCategory

export async function getServerSideProps(context: GetServerSidePropsContext){
    const {params}  = context
    const {category} = params as {category: string}
    const result = await fetch(`https://dummyjson.com/products`);
    const data = await result.json() 
    const filteredProducts = data.products.filter((product:product) =>product.category === category)

    return {
        props:
            {products: filteredProducts,
                category: category}
            }
        
    }
