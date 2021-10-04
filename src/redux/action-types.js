export const types = {
    SET_USER_FIRSTNAME: 'SET_USER_FIRSTNAME',
    SET_USER_LASTNAME: 'SET_USER_LASTNAME',
    SET_USER_AGE: 'SET_AGE',
    SET_USER_EMAIL: 'SET_USER_EMAIL',
    SET_USER_GENDER: 'SET_USER_GENDER',
    SET_USER_USERNAME: 'SET_USER_USERNAME',
    INCREMENT_USER_ID: 'INCREMENT_USER_ID',
    SET_USER: 'SET_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_USER: 'UPDATE_USER',
}

export const setUserFirstNameAC = (firstName) => ({ type: types.SET_USER_FIRSTNAME, firstName });
export const setUserLastNameAC = (lastName) => ({ type: types.SET_USER_LASTNAME, lastName });
export const setUserAgeAC = (age) => ({ type: types.SET_USER_AGE, age });
export const setUserEmailAC = (email) => ({ type: types.SET_USER_EMAIL, email });
export const setUserGenderAC = (gender) => ({ type: types.SET_USER_GENDER, gender });
export const setUserUsernameAC = (userName) => ({ type: types.SET_USER_USERNAME, userName });
export const deleteUserAC = (userId) => ({ type: types.DELETE_USER, userId });
export const incrementUserIdAC = (userId) => ({ type: types.INCREMENT_USER_ID, userId });
export const updateUserAC = (user) => ({ type: types.UPDATE_USER, user: user });
export const setUserAC = (user) => ({ type: types.SET_USER, user });
