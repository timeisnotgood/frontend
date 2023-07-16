import ActionType from "../contants/Action-type"

export const setproduct = (products) =>{
    return{ 
        type :ActionType.SET_PRODUCT,
        payload :products
    }
}

export const seletedproduct = (products) =>{
    return{
        type :ActionType.SELECTED_PRODUCT,
        payload :products
    }
}