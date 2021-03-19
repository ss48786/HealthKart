import reducer from './reducer';
import store from './store';
import types from './types';



const {dispatch, getState, subscribe} = store;
export const Details = (id) => ({
  
  type: types.DETAILS,
 
   number:id
});

export const DELETE = (id) => ({
  type: types.DELETE,
  
  id:  Math.random() 
});

export const UPDATE = (message , description , id) => ({
  type: types.UPDATE,
  message : message , 
  description: description ,
  status : "PENDING" ,
  id: id 
});