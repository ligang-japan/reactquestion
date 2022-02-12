import jsonplaceholder from '../apis/jsonPlaceHolder';
import history from '../history';
import streams from '../apis/streams';
import _ from 'lodash';

import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAMS
} from './types';
import formValues from 'redux-form/lib/formValues';

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds =_.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}
export const fetchPosts = () =>async dispatch =>{
    const response = await jsonplaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data })

};


export const selectPost = () =>{
    return {
        type: 'SELECT_POST'
    }
}

export const fetchUser = (id) => async dispatch =>{
    const response = await jsonplaceholder.get(`/users/${id}`)
    dispatch ({type: 'FETCH_USER', payload: response.data});
};

export const SignIn =(userId) =>{
    return {
        type: SIGN_IN,
        payload: userId
    };
};
export const SignOut =() =>{
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues =>  async (dispatch, getState) =>{
    const {userId}=getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({type:CREATE_STREAM, payload: response.data});
    };
    history.push('/');

export const fetchStreams = () => async dispatch =>{
    const response = await streams.get('/streams');
    dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream =(id) =>async dispatch =>{
    const response = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream =(id, formValues) => async dispatch =>{
    const response = await streams.put(`/streams/${id}`, formValues);
    dispatch({type: EDIT_STREAM, payload: response.data});
};

export const deleteStream = (id) => async dispatch =>{
    await streams.delete(`/steams/${id}`);
    dispatch({type:DELETE_STREAM, payload: id});
}