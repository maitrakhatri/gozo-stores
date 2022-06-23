import { getCatogriedProducts, getRatedProducts, getPricedProducts, getSortedProducts } from "./filters"

const products = [
    {
        name: `Zack Snyder's Justice League`,
        src: "../../assets/images/posters/zcjl.jpeg",
        ogPrice: 3500,
        discount: "50%",
        finalPrice: 1750,
        categoryName: "dceu",
        rating: 4.9
    },
    {
        name: `Catwoman - The Batman`,
        src: "../../assets/images/posters/catwoman.jpg",
        ogPrice: 1500,
        discount: "50%",
        finalPrice: 750,
        categoryName: "dc",
        rating: 4.4
    },
    {
        name: `Captain America - Civil War`,
        src: "../../assets/images/posters/civilwar.jpg",
        ogPrice: 600,
        discount: "50%",
        finalPrice: 300,
        categoryName: "marvel",
        rating: 4.1
    },
    {
        name: `Kickass`,
        src: "../../assets/images/posters/kickass.jpg",
        ogPrice: 500,
        discount: "50%",
        finalPrice: 250,
        categoryName: "others",
        rating: 3.4
    },
    {
        name: `Moonknight`,
        src: "../../assets/images/posters/moonknight.jpg",
        ogPrice: 3000,
        discount: "50%",
        finalPrice: 1500,
        categoryName: "marvel",
        rating: 3.1
    },
]

describe("Testing Filters", () => {

    it("gets products from a specific category", () => {

        const expectedProductsFromCategory = [
            {
                name: `Captain America - Civil War`,
                src: "../../assets/images/posters/civilwar.jpg",
                ogPrice: 600,
                discount: "50%",
                finalPrice: 300,
                categoryName: "marvel",
                rating: 4.1
            },
            {
                name: `Moonknight`,
                src: "../../assets/images/posters/moonknight.jpg",
                ogPrice: 3000,
                discount: "50%",
                finalPrice: 1500,
                categoryName: "marvel",
                rating: 3.1
            },
            {
                name: `Catwoman - The Batman`,
                src: "../../assets/images/posters/catwoman.jpg",
                ogPrice: 1500,
                discount: "50%",
                finalPrice: 750,
                categoryName: "dc",
                rating: 4.4
            }
        ]

        const finalProductsFromCategory = getCatogriedProducts(["marvel", "dc"], products)

        expect(finalProductsFromCategory).toEqual(expectedProductsFromCategory)
    })

    it("gets products with specified rating", () => {

        const expectedProductsFromRating = products

        const finalProductsFromRating = getRatedProducts(3, products)

        expect(expectedProductsFromRating).toEqual(finalProductsFromRating)
    })

    it("gets products under a specific price", () => {

        const expectedPricedProdcuts = [
            {
                name: `Captain America - Civil War`,
                src: "../../assets/images/posters/civilwar.jpg",
                ogPrice: 600,
                discount: "50%",
                finalPrice: 300,
                categoryName: "marvel",
                rating: 4.1
            },
            {
                name: `Kickass`,
                src: "../../assets/images/posters/kickass.jpg",
                ogPrice: 500,
                discount: "50%",
                finalPrice: 250,
                categoryName: "others",
                rating: 3.4
            },
        ]

        const finalPricedProducts = getPricedProducts(350, products)

        expect(expectedPricedProdcuts).toEqual(finalPricedProducts)
    })

    it(" gets sorted porducts", () => {

        const expectedSortedProducts = [
            {
                name: `Zack Snyder's Justice League`,
                src: "../../assets/images/posters/zcjl.jpeg",
                ogPrice: 3500,
                discount: "50%",
                finalPrice: 1750,
                categoryName: "dceu",
                rating: 4.9
            },
            {
                name: `Moonknight`,
                src: "../../assets/images/posters/moonknight.jpg",
                ogPrice: 3000,
                discount: "50%",
                finalPrice: 1500,
                categoryName: "marvel",
                rating: 3.1
            },
            {
                name: `Catwoman - The Batman`,
                src: "../../assets/images/posters/catwoman.jpg",
                ogPrice: 1500,
                discount: "50%",
                finalPrice: 750,
                categoryName: "dc",
                rating: 4.4
            },
            {
                name: `Captain America - Civil War`,
                src: "../../assets/images/posters/civilwar.jpg",
                ogPrice: 600,
                discount: "50%",
                finalPrice: 300,
                categoryName: "marvel",
                rating: 4.1
            },
            {
                name: `Kickass`,
                src: "../../assets/images/posters/kickass.jpg",
                ogPrice: 500,
                discount: "50%",
                finalPrice: 250,
                categoryName: "others",
                rating: 3.4
            },
        ]

        const finalSortedProducts = getSortedProducts("HIGH-TO-LOW", products)

        expect(expectedSortedProducts).toEqual(finalSortedProducts)
    })
})
