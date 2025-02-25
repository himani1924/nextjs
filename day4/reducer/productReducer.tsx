import { get_products, add_product, delete_product, Product, ProductAction } from "./productAction";

export interface ProductState{
    products: Product[]
}
 
const initialState: ProductState = {
    products: []
}


const productReducer = (state:ProductState=initialState, action:ProductAction):ProductState=>{
    switch(action.type){
        case get_products:
            return {
                ...state, 
                products: action.payload
            }
        case add_product:
            return {
                ...state, 
                products: [...state.products, action.payload]
            }
        case delete_product:
            return {
                ...state, 
                products: state.products.filter(product=>product.id!==action.payload)
            }
        default:
            return state
    }
}

export default productReducer;