export const cartReducer = (state, action) => {

    switch(action.type) {

        case "ADD-TO-CART":
            return {
                ...state,
                ...state.product,
                ...state.adder,
                adder: !state.adder,
                product: action.payload
            }
        
        case "DELETE-FROM-CART":
            return {
                ...state,
                ...state.productId,
                ...state.deleteProduct,
                ...state.deleter,
                deleter: !state.deleter,
                deleteProduct: true,
                productId: action.payload
            }

        case "UPDATE-CART-QUANTITY":
            return {
                ...state,
                ...state.productId,
                ...state.updateType,
                ...state.updater,
                updater: !state.updater,
                productId: action.payload,
                updateType: action.updateType
            }

        default:
            return {
                ...state
            }
    }
}