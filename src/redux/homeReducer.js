const SET_USER_FIRSTNAME = 'SET_USER_FIRSTNAME';
const SET_USER_LASTNAME = 'SET_USER_LASTNAME';
const SET_USER_AGE = 'SET_AGE';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const SET_USER_GENDER = 'SET_USER_GENDER';
const SET_USER_USERNAME = 'SET_USER_USERNAME';
const INCREMENT_USER_ID = 'INCREMENT_USER_ID';
const SET_USER = 'SET_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

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
        case SET_USER_FIRSTNAME:
            return {
                ...state,
                newUser: { ...state.newUser, firstName: action.firstName }
            }
        case SET_USER_LASTNAME:
            return {
                ...state,
                newUser: { ...state.newUser, lastName: action.lastName }
            }
        case SET_USER_AGE:
            return {
                ...state,
                newUser: { ...state.newUser, age: action.age }
            }
        case SET_USER_EMAIL:
            return {
                ...state,
                newUser: { ...state.newUser, email: action.email }
            }
        case SET_USER_GENDER:
            return {
                ...state,
                newUser: { ...state.newUser, gender: action.gender }
            }
        case SET_USER_USERNAME:
            return {
                ...state,
                newUser: { ...state.newUser, userName: action.userName }
            }
        case INCREMENT_USER_ID:
            return {
                ...state,
                newUser: { ...state.newUser, id: state.newUser.id + 1 }
            }
        case SET_USER:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case DELETE_USER:
            return {
                ...state,
                users: [...state.users.filter((user) => {
                    return user.id !== action.userId
                })]
            }
        case UPDATE_USER: {
            let index = state.users.findIndex(u => u.id === action.user.id);

            return {
                ...state,
                users: [...state.users.slice(0, index), action.user, ...state.users.slice(index + 1)]
            }
        }
        default: return state;
    }
}

export const setUserFirstNameAC = (firstName) => ({ type: SET_USER_FIRSTNAME, firstName });
export const setUserLastNameAC = (lastName) => ({ type: SET_USER_LASTNAME, lastName });
export const setUserAgeAC = (age) => ({ type: SET_USER_AGE, age });
export const setUserEmailAC = (email) => ({ type: SET_USER_EMAIL, email });
export const setUserGenderAC = (gender) => ({ type: SET_USER_GENDER, gender });
export const setUserUsernameAC = (userName) => ({ type: SET_USER_USERNAME, userName });
export const deleteUserAC = (userId) => ({ type: DELETE_USER, userId });
export const incrementUserIdAC = (userId) => ({ type: INCREMENT_USER_ID, userId });
export const updateUserAC = (user) => ({ type: UPDATE_USER, user: user });
export const setUserAC = (user) => ({ type: SET_USER, user });

export default homeReducer;