import { filterReducer } from "./filter-reducer"

const initialState = {
    sortBy: "",
    priceRange: 2000,
    rating: 0,
    categories: []
}

describe("Testing Filter Reducer", () => {

    it("adds category to the categories array", () => {

        const addCatAction = {
            type: "ADD-CAT",
            status: true,
            payload: "marvel"
        }

        const addCatExpectedState = {
            sortBy: "",
            priceRange: 2000,
            rating: 0,
            categories: ["marvel"]
        }

        const addCatFinalState = filterReducer(initialState, addCatAction)
        expect(addCatFinalState).toEqual(addCatExpectedState)
    })

    it("removes category from the categories array", () => {

        const removeCatAction = {
            type: "ADD-CAT",
            status: false,
            payload: "marvel"
        }

        const removeCatInitialState = {
            sortBy: "",
            priceRange: 2000,
            rating: 0,
            categories: ["marvel", "dc"]
        }

        const removeCatExpectedState = {
            sortBy: "",
            priceRange: 2000,
            rating: 0,
            categories: ["dc"]
        }

        const removeCatFinalState = filterReducer(removeCatInitialState, removeCatAction)
        expect(removeCatFinalState).toEqual(removeCatExpectedState)
    })

    it("returns the price range", () => {

        const priceAction = {
            type: "PRICE-RANGE",
            payload: 1500
        }

        const priceExpectedState = {
            sortBy: "",
            priceRange: 1500,
            rating: 0,
            categories: ["marvel"]
        }

        const priceFinalState = filterReducer(initialState, priceAction)
        expect(priceFinalState).toEqual(priceExpectedState)
    })

    it("returns the rating", () => {

        const ratingAction = {
            type: "RATING",
            payload: 3
        }

        const ratingExpectedState = {
            sortBy: "",
            priceRange: 2000,
            rating: 3,
            categories: ["marvel"]
        }

        const ratingFinalState = filterReducer(initialState, ratingAction)
        expect(ratingFinalState).toEqual(ratingExpectedState)
    })

    it("return the sort type", () => {

        const sortAction = {
            type: "SORT",
            payload: "LOW-TO-HIGH"
        }

        const sortExpectedState = {
            sortBy: "LOW-TO-HIGH",
            priceRange: 2000,
            rating: 0,
            categories: ["marvel"]
        }

        const sortFinalState = filterReducer(initialState, sortAction)
        expect(sortFinalState).toEqual(sortExpectedState)
    })

    it("clears the filters", () => {

        const clearAction = {
            type: "CLEAR"
        }

        const clearExpectedState = {
            sortBy: "",
            priceRange: 2000,
            rating: 0,
            categories: []
        }

        const clearFinalState = filterReducer(initialState, clearAction)
        expect(clearFinalState).toEqual(clearExpectedState)
    })

})