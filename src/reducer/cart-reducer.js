export const cartReducer = (cartState, action) => {

    switch(action.type) {

        case "ADD-TO-CART":
            return {
                ...cartState,
                ...cartState.product,
                ...cartState.adder,
                adder: !cartState.adder,
                product: action.payload
            }
        
        case "DELETE-FROM-CART":
            return {
                ...cartState,
                ...cartState.productId,
                ...cartState.deleteProduct,
                ...cartState.deleter,
                deleter: !cartState.deleter,
                deleteProduct: true,
                productId: action.payload
            }

        case "UPDATE-CART-QUANTITY":
            return {
                ...cartState,
                ...cartState.productId,
                ...cartState.updateType,
                ...cartState.updater,
                updater: !cartState.updater,
                productId: action.payload,
                updateType: action.updateType
            }

        default:
            return {
                ...cartState
            }
    }
}