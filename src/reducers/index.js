import {APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, SET_MEMORY, CHANGE_MEMORY, CLEAR_MEMORY} from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                total: 0,
                operation: state.operation,
                memory: 0
            })
        case(SET_MEMORY):
            return ({
                ...state,
                memory: action.payload,
            })
        case(CHANGE_MEMORY):   //  this is changing my initial memory number to a 
            return ({          // negative number while subtracting, not working as intended.
                ...state,
                memory: calculateResult(state.total, action.payload, state.operation)
            })
        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0,
            })
            
        default:
            return state;
    }
}

export default reducer;