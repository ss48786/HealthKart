
import imagePath from '../../constants/imagePath';
import navigationString from '../../constants/navigationString';
import types from './types';
const INITIAL_STATE = {
  productsArray:[{
    id: 0,
    name: "RED TAPE",
    text: "Checked Tshirt",
    image: imagePath.dp2,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 1,
    name: "RED TAPE",
    text: "Checked Tshirt",
    image: imagePath.dp3,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 2,
    name: "RED TAPE",
    text: "Checked Tshirt",
    image: imagePath.dp4,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 3,
    name: "RED TAPE",
    text: "Checked Tshirt",
    image: imagePath.dp5,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 4,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp6,
    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 5,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp7,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 6,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp8,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 7,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp9,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 8,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp10,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 9,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp9,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 10,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp8,

    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 11,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp7,
    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 12,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp6,
    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  },
  {
    id: 13,
    name: "RED TAPE",
    text: "Checked shirt",
    image: imagePath.dp5,
    Price: 2599,
    reducedPrice: "Rs 650",
    discount: "75%",
    quant: 1,
  }],
  newarray:'',
  selecteditem:'', 
  count:0
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DETAILS:
          return  {

            ...state , 
            productsArray : [ 
              ...state.productsArray,
               

              {
                
               id:action.id

               
              }
            ]

           } ;
        case types.DELETE:
           return {
              ...state, count: state.count - 1,
           };
           case types.EDIT:
           return {
              ...state, count: state.count - 1,
           };
         default: return state;
    }
};
export default reducer;
