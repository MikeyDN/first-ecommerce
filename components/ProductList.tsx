import { useState, useEffect} from "react";
import { Product } from "../lib/types";
import ProductView from "./ProductView";
import { client } from "../lib/client";


type ProductListProps = {
    products: Product[]
}



function ProductList(props: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetchData(setProducts)
      }, [])
    
}
export default ProductList