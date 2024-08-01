import {ACTIONS} from '../cake/Types'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState , action) => {
    switch(action.type){
        case ACTIONS.BUY_ICECREAM:
            return {
                ...state, 
                numOfIceCreams: state.numOfIceCreams - 1 }
        default : 
        return state
    }
}

export default iceCreamReducer