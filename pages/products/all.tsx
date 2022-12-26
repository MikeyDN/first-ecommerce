import React, {useState, useEffect} from 'react';
import { Product } from '../../lib/types';
import { client } from '../../lib/client';
import LoadingIcon from '../../components/LoadingIcon';
import ProductView from '../../components/ProductView';

const allProducts = () => {
    const [products, setProducts] = useState<Product[]|null>(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await client.fetch(
              `*[_type == "product"]`
              )
            setProducts(result)
          }
        fetchData()
    }, [])

    if (products == null) return <LoadingIcon />

    return (
        <div className="product-list">
            {products.map((product: Product, index: number) => (
              <ProductView product = { product } />
            ))}
        </div>
      )
}

export default allProducts