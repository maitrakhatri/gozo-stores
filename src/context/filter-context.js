import { createContext, useContext, useReducer } from "react";
import { useProduct } from "./product-context";
import {getCatogriedProducts,getRatedProducts, getPricedProducts, getSortedProducts} from "../utils/filters" 
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext()

const FilterProvider = ({children}) => {

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

const useFilter = () => useContext(FilterContext)

export {useFilter, FilterProvider}