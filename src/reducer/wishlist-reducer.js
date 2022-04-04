export const wishlistReducer = (state, action) => {

    switch(action.type) {

      case "ADD-TO-WISHLIST":
        return {
          ...state,
          ...state.product,
          product: action.payload
        }
      
      case "DELETE-FROM-WISHLIST":
        return {
          ...state,
          ...state.productId,
          productId: action.payload
        }
      
      default:
        return {
          ...state
        }
    }
  }