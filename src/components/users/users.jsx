import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteUserAC } from '../../redux/homeReducer';
import male from '../../assets/male.png';
import female from '../../assets/female.png';

import './users.css';

const Users = (props) => {
    const [change, addChange] = useState(false);
    const deleteUser = (userId) => {
        props.deleteUser(userId);
    }

    const editUser = (userId) => {
        addChange(true);
        // props.editUser(userId);
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
                                <button className='delete_user' onClick={() => deleteUser(user.id)}>Delete</button>
                                <button className='edit_user' onClick={() => editUser(user.id)}>Edit</button>
                            </div>
                            {change ? <div className={change ? 'block' : 'hide'}>

                            </div> : ''}
                        </div>
                    )
                })}
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
        // editUser: (userId) => {
        //     dispatch(editUserAC(userId))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
