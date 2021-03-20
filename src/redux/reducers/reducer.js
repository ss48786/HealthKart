
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import types from './types';
const INITIAL_STATE = {
 
  myarray:[],
  selecteditem:'', 
  count:0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DETAILS:
          const {newAry} =action.payload;
          //  alert(JSON.stringify(newAry))
          return {...state, newAry}

        case types.CART:
          const {cartarray,index}=action.payload;
          // alert(JSON.stringify(cartarray[index]))
           
          if (!state.myarray.includes(cartarray[index])){
            var status = [...state.myarray,cartarray[index]];
          }
          // alert(JSON.stringify(status))
           return {
              ...state,
              myarray:[...status]
           };
           
           case types.EDIT:
           return {
              ...state, count: state.count - 1,
           };
         default: return state;
    }
};
export default reducer;
