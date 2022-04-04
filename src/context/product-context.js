import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({children}) {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    /*const getProducts = async () => {
        const res = await axios.get("/api/products")
        setProducts(res.data.products)
        setLoading(false)
    }*/

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get("/api/products")
            setProducts(res.data.products)
            setLoading(false)
        }
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products, loading}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext);
