export const wishlistReducer = (wishlistState, action) => {

    switch(action.type) {

      case "ADD-TO-WISHLIST":
        return {
          ...wishlistState,
          ...wishlistState.product,
          product: action.payload
        }
      
      case "DELETE-FROM-WISHLIST":
        return {
          ...wishlistState,
          ...wishlistState.productId,
          productId: action.payload
        }
      
      default:
        return {
          ...wishlistState
        }
    }
  }