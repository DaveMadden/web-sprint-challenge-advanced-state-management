import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERR = "FETCH_ERR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERR = "ADD_ERR";

export const fetchSmurfs = () =>{
    console.log("in fetch smurfs")
    return (dispatch) => {
        console.log("in fetchSmurfs return statement")
        dispatch(fetchStart());


        console.log("about to call axios")
        axios.get("http://localhost:3333/smurfs")
            .then(resp=>{
                console.log(resp.data);
                dispatch(fetchSuccess(resp.data)); //NEED TO CHECK THIS DATA AND DRILL DOWN
            })
            .catch(err=>{
                console.error(err);
                dispatch(fetchErr(err))
            })
    }
}

export const fetchStart = () => {
    console.log("action: fetchStart")
    return({type: FETCH_START});
}
export const fetchSuccess = (smurfs) =>{
    console.log("action: fetchSuccess")
    return({type: FETCH_SUCCESS, payload: smurfs});
}
export const fetchErr = (err) => {
    console.log("action: fetchErr")
    return ({type: FETCH_ERR, payload: err})
}

export const addSmurf = (newSmurf) => {
    console.log("action: addSmurf")
    return({type: ADD_SMURF, payload: newSmurf});
}
export const setErr = (err) => {
    console.log("action: setErr")
    return({type:SET_ERR, payload: err})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.