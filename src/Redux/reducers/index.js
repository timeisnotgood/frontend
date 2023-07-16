import { combineReducers } from 'redux'
import { productreducer, seletedproductreducer } from './productreducer';

const reducer = combineReducers({
   allproducts : productreducer,
   product : seletedproductreducer
}) 

export default reducer;