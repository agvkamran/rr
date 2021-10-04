import { types } from "./action-types"

const initialState = {
    users: [],
    newUser: {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        gender: '',
        userName: '',
        id: 0
    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_FIRSTNAME:
            return {
                ...state,
                newUser: { ...state.newUser, firstName: action.firstName }
            }
        case types.SET_USER_LASTNAME:
            return {
                ...state,
                newUser: { ...state.newUser, lastName: action.lastName }
            }
        case types.SET_USER_AGE:
            return {
                ...state,
                newUser: { ...state.newUser, age: action.age }
            }
        case types.SET_USER_EMAIL:
            return {
                ...state,
                newUser: { ...state.newUser, email: action.email }
            }
        case types.SET_USER_GENDER:
            return {
                ...state,
                newUser: { ...state.newUser, gender: action.gender }
            }
        case types.SET_USER_USERNAME:
            return {
                ...state,
                newUser: { ...state.newUser, userName: action.userName }
            }
        case types.INCREMENT_USER_ID:
            return {
                ...state,
                newUser: { ...state.newUser, id: state.newUser.id + 1 }
            }
        case types.SET_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case types.DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter((user) => {
                    return user.id !== action.userId
                })]
            }
        case types.UPDATE_USER: {
            let index = state.users.findIndex(u => u.id === action.user.id);

            return {
                ...state,
                users: [...state.users.slice(0, index), action.user, ...state.users.slice(index + 1)]
            }
        }
        default: return state;
    }
}

export default homeReducer;