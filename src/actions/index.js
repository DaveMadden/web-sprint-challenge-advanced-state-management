import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERR = "FETCH_ERR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERR = "ADD_ERR";

export const fetchSmurfs = () =>{
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get("http://localhost:3333/smurfs")
            .then(resp=>{
                dispatch(fetchSuccess(resp.data));
            })
            .catch(err=>{
                dispatch(fetchErr(err))
            })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START});
}
export const fetchSuccess = (smurfs) =>{
    return({type: FETCH_SUCCESS, payload: smurfs});
}
export const fetchErr = (err) => {
    return ({type: FETCH_ERR, payload: err})
}

export const addSmurf = (newSmurf) => {
    return (dispatch)=>{
        axios.post("http://localhost:3333/smurfs", newSmurf)
            .then(resp=>{
                dispatch({type: ADD_SMURF, payload: resp.data[resp.data.length-1]})
            })
            .catch(err=>{
                dispatch(setErr);
            })
    }
}
export const setErr = (err) => {
    return({type:SET_ERR, payload: err})
}