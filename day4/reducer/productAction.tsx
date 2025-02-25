export const get_products = 'get_products';
export const add_product = 'add_product';
export const delete_product = 'delete_product';

export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
}

interface getProdAction{
    type: typeof get_products;
    payload: Product[];
}

interface addProdAction{
    type: typeof add_product;
    payload: Product;
}

interface delProdAction{
    type: typeof delete_product;
    payload: number;
}

export type ProductAction = getProdAction | addProdAction | delProdAction;

export const getProducts = (products: Product[]): getProdAction =>({type: get_products, payload: products})

export const addProducts = (product: Product): addProdAction =>({type: add_product, payload: product})

export const deleteProducts = (productId: number): delProdAction =>({type: delete_product, payload: productId})