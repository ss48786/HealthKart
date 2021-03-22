import reducer from './reducer';
import store from './store';
import types from './types';



const {dispatch, getState, subscribe} = store;
export const Details = (newAry) => ({
 
  type: types.DETAILS,
  payload:{newAry}
 
});
// export const Cart = (cartarray,index) => ({
//   type: types.CART,
//   payload:{cartarray,index}
  
  
// });


export const UPDATE = (message , description , id) => ({
  type: types.UPDATE,
  message : message , 
  description: description ,
  status : "PENDING" ,
  id: id 
});