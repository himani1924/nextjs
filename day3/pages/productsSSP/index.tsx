import React from 'react'
import styles from './productsSSP.module.css'
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
const ProductsSSP:React.FC<ProductProps> = ({products}) => {
  return (
    <div>
        <h1>List of Products with getServerSideProps</h1>
        <div className="container"></div>
        {
            products.map((product:product)=>{
                return <div key={product.id} className={`${styles.card}`}>
                    <h2 className={`${styles.cardHeading} `}>{product.title}</h2>
                    <p className={styles.cardPrice}>Price: {product.price}</p>
                    <span className={styles.cardCategory}>{product.category}</span>
                    <p className={styles.cardDesc}>{product.description}</p>
                    <p className={styles.cardRating}>{product.rating}</p>
                </div>
            })
        }
    </div>
  )
}
export default ProductsSSP

export async function getServerSideProps(){
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json() 

    return {
        props:
            {products: data.products}
        
    }
}