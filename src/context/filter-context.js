import { createContext, useContext, useReducer } from "react";
import { useProduct } from "./";
import {getCatogriedProducts,getRatedProducts, getPricedProducts, getSortedProducts} from "../utils/filters" 
import { filterReducer } from "../reducer";

const FilterContext = createContext()

export const FilterProvider = ({children}) => {

    const [state, dispatch] = useReducer(filterReducer, {
        sortBy: "",
        priceRange: 2000,
        rating: 0,
        categories: []
    })

    const {products} = useProduct();

    const categoriedProducts = getCatogriedProducts(state.categories, products)
    const ratedProducts = getRatedProducts(state.rating, categoriedProducts)
    const pricedProducts = getPricedProducts(state.priceRange, ratedProducts)
    const sortedProducts = getSortedProducts(state.sortBy, pricedProducts)

    const filteredProducts = sortedProducts

    return (
        <FilterContext.Provider value={{dispatch, state, filteredProducts }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)
