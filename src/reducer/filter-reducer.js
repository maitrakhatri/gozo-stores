export const filterReducer = (state, action) => {
    switch(action.type) {
        case "PRICE-RANGE":
            return {
                ...state,
                ...state.priceRange,
                priceRange: action.payload
            }

        case "ADD-CAT":
            if(action.status) {
                const newCatArr = state.categories;
                newCatArr.push(action.payload)
                return {
                    ...state,
                    ...state.categories,
                    categories: [...new Set(newCatArr)]
                }
            }
            if(!action.satus) {
                const newCatArr = state.categories.filter((item) => item !== action.payload)
                return {
                    ...state,
                    ...state.categories,
                    categories: [...new Set(newCatArr)]
                }
            }

        case "RATING":
            return {
                ...state,
                ...state.rating,
                rating: action.payload
            }

        case "SORT":
            return {
                ...state,
                ...state.sortBy,
                sortBy: action.payload
            }

        case "CLEAR":
            return {
                ...state,
                sortBy: "",
                priceRange: 2000,
                rating: 0,
                categories: []
            }

        default:
            return {
                ...state
            }
    }
}