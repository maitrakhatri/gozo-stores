const getCatogriedProducts = (categories, products) => {

    const categoriedProductReducer = (acc, currItem) => {
        const productsArray = products.filter((item) => item.categoryName === currItem);
        acc = acc.concat(productsArray);
        return acc;
    }

    if(categories.length === 0) {
        return products
    }
    else{
        return categories.reduce(categoriedProductReducer, [])
    }
}

const getRatedProducts = (rating, products) => {
    return products.filter((item) => item.rating >= rating)
}

const getPricedProducts = (priceRange, products) => {
    return products.filter((item) => item.finalPrice <= priceRange)
}

const getSortedProducts = (sortBy, products) => {
    if(sortBy === "LOW-TO-HIGH") {
        return products.sort((item1, item2) => item1.finalPrice - item2.finalPrice)
    }
    if(sortBy === "HIGH-TO-LOW") {
        return products.sort((item1, item2) => item2.finalPrice - item1.finalPrice)
    }
    else {
        return products
    }
}

export {getCatogriedProducts,getRatedProducts, getPricedProducts, getSortedProducts}