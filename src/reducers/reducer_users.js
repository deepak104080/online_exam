import { ADD_USER, SHOW_USER, UPDATE_USER, DELETE_USER, SHOW_USERS } from './../actions/actions_users';

const initialState = {
    userid: '',
    username: '',
    name: '',
    email: ''
}


const reducer_users = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER' : 
        //call api
            return {
                userid: '1',
                username: '',
                name: '',
                email: ''
            }
        case 'SHOW_USER' :
            return {
                userid: '',
                username: '2',
                name: '',
                email: ''
            }
        case 'UPDATE_USER' : 
            return {
                userid: '',
                username: '',
                name: '3',
                email: ''
            }
        case 'DELETE_USER' :
            return {
                userid: '',
                username: '',
                name: '',
                email: '4'
            }
        case 'SHOW_USERS': 
            return {
                userid: '11',
                username: '22',
                name: '33',
                email: '44'
            }
        default: return state;
    }
}

// Redux api libraries/middlewares - redux-saga, redux-thunk

export default reducer_users;