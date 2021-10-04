import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteUserAC, updateUserAC } from '../../redux/action-types';
import male from '../../assets/male.png';
import female from '../../assets/female.png';

import './users.css';

const Users = (props) => {
    const [change, setChange] = useState(false);
    const [user, setUser] = useState(null);
    const [isEditMode, setEditMode] = useState(false);

    const onChangeFirstName = (e) => {
        let firstName = e.target.value;
        setUser({...user, firstName: firstName});
    }

    const onChangeLastName = (e) => {
        let lastName = e.target.value;
        setUser({...user, lastName: lastName});
    }

    const onChangeAge = (e) => {
        let age = e.target.value;
        setUser({...user, age: age});
    }

    const onChangeEmail = (e) => {
        let email = e.target.value;
        setUser({...user, email: email});
    }

    const onChangeGender = (e) => {
        let gender = e.target.value;
        setUser({...user, gender: gender});
    }

    const onChangeUsername = (e) => {
        let userName = e.target.value;
        setUser({...user, userName: userName});
    }

    const isValidUser = (user) => {
        return (user.lastName.length !== 0 && user.firstName.length !== 0 && user.age.length !== 0 &&
            user.email.length !== 0 && user.gender.length !== 0 && user.userName.length !== 0);
    }

    const deleteUser = (userId) => {
        props.deleteUser(userId);
    }

    const editUser = (userId) => {
        setEditMode(true)
        setChange(true);
        setUser(props.users.filter(u => u.id === userId)[0]);
    }

    const updateUser = () => {
        if (!isValidUser(user)) {
            return;
        }
        props.updateUser(user);
        setUser(null);
        setChange(false);
        setEditMode(false);
    }

    return (
        <div className='users_page'>
            {props.users.map((user, index) => {
                return (
                    <div key={index} className='user_block'>
                        {user.gender === 'Male' ? <img src={male} alt="male" className='user_photo' /> : <img src={female} alt='female' />}
                        <div className='user_text'>
                            <p>Firstname: {user.firstName}</p>
                            <p>Lastname: {user.lastName}</p>
                            <p>Age: {user.age}</p>
                            <p>Email: {user.email}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Username: {user.userName}</p>
                            <button className='delete_user' disabled={isEditMode} onClick={() => deleteUser(user.id)}>Delete</button>
                            <button className='edit_user' onClick={() => editUser(user.id)}>Edit</button>
                        </div>
                    </div>
                )
            })}
            {change ? <div className={change ? 'block' : 'hide'}>
                <div className='inputs_wrapper'>
                    <input className='inputs' type='text' maxLength='20' placeholder='Firstname' onChange={onChangeFirstName} value={user.firstName} />
                    <input className='inputs' type="text" maxLength='20' placeholder='Lastname' onChange={onChangeLastName} value={user.lastName} />
                    <input className='inputs' type="text" maxLength='2' placeholder='Age' onChange={onChangeAge} value={user.age} />
                    <input className='inputs' type="text" maxLength='30' placeholder='Email' onChange={onChangeEmail} value={user.email} />
                    <div className='gender_change' onChange={onChangeGender}>
                        <input className='gender' type="radio" value="Male" name="gender" checked={user.gender === "Male"} readOnly /> Male
                        <input className='gender' type="radio" value="Female" name="gender" checked={user.gender === "Female"} readOnly /> Female
                    </div>
                    <input className='inputs' type="text" maxLength='30' placeholder='Username' onChange={onChangeUsername} value={user.userName} />
                    <button className='btn_setuser' onClick={updateUser}>Update User</button>
                </div>
            </div> : ''}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.homePage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => {
            dispatch(deleteUserAC(userId));
        },
        updateUser: (user) => {
            dispatch(updateUserAC(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
