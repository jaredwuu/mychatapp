//comments.js  actions
import * as api from '../api';
import {FETCH_ALL,  CREATE, DELETE} from '../constants/actionTypes'

//action Creators

export const getComments=()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchComments();
        dispatch({type: FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message);
    }
}

export const createComment = (comment)=> async(dispatch)=>{
    try {
        const {data} = await api.createComment(comment);

        dispatch({type: CREATE, payload:data})
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteComment = (id)=>async(dispatch)=>{
    try {
        await api.deleteComment(id);
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.log(error);        
    }
}



