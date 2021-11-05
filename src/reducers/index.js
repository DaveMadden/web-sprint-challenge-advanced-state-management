import { FETCH_START, FETCH_SUCCESS, FETCH_ERR, ADD_SMURF, SET_ERR } from "../actions";
export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ""
}

export const reducer = (state=initialState, action)=>{
    console.log("in reducer with action.type: ", action.type)
    switch(action.type){
        case FETCH_START:
            console.log("in case FETCH START")
            return ({
                ...state,
                smurfs: [],
                isLoading: true,
                error: ""
            });
        case FETCH_SUCCESS:
            console.log("in case FETCH SUCCESS")
            return({
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ""
            });
        case FETCH_ERR:
            console.log("in case FETCH ERR")
            return ({
                ...state,
                smurfs:[],
                isLoading: false,
                error: action.payload
            });
        case ADD_SMURF:
            console.log("in case ADD SMURF")
            return ({
                ...state,
                smurfs:[...state.smurfs, action.payload],
                isLoading: false,
                error: ""
            });
        case SET_ERR: //not sure about use-case here
            console.log("in case SET ERR")
            return ({
                ...state,
                error: action.payload
            });
        default:
            console.log("in case DEFAULT")
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.