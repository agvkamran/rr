const SET_USER = 'SET_USER';

const initialState = {
    users: [{
        firstName: 'asdasd',
        lastName: '',
        age: 0,
        email: '',
        gender: '',
        userName: ''
    }]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.newUser]
            }
        default: return state;
    }
}

export const setUserAC = () => ({ type: SET_USER });


export default homeReducer;