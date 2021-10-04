import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserAC, setUserAgeAC, setUserEmailAC, setUserFirstNameAC, setUserLastNameAC, setUserGenderAC, setUserUsernameAC, incrementUserIdAC } from '../../redux/action-types';
import form_image from '../../assets/form_image.jpg';
import './home.css';


const Home = (props) => {
    const [text, setText] = useState('');

    const onChangeFirstName = (e) => {
        let firstName = e.target.value;
        props.setUserFirstName(firstName);
    }

    const onChangeLastName = (e) => {
        let lastName = e.target.value;
        props.setUserLastName(lastName);
    }

    const onChangeAge = (e) => {
        let age = e.target.value;
        props.setUserAge(age);
    }

    const onChangeEmail = (e) => {
        let email = e.target.value;
        props.setUserEmail(email);
    }

    const onChangeGender = (e) => {
        let gender = e.target.value;
        props.setUserGender(gender);
    }

    const onChangeUsername = (e) => {
        let userName = e.target.value;
        props.setUserUsername(userName);
    }

    const setUser = () => {
        let user = props.newUser;
        if (isValidUser(user)) {
            props.setUser(user);
            setText('User has been successfully added.');
            props.incrementUserId();
            resetInputs(user);
        }
        else {
            setText('User is not added, please fill in all fields.')
            return false
        }
        resetInputs(user);
    }

    const resetInputs = () => {
        props.setUserFirstName('');
        props.setUserLastName('');
        props.setUserAge('')
        props.setUserEmail('');
        props.setUserGender('');
        props.setUserUsername('');
    }

    const isValidUser = (user) => {
        return (user.lastName.length !== 0 && user.firstName.length !== 0 && user.age.length !== 0 &&
            user.email.length !== 0 && user.gender.length !== 0 && user.userName.length !== 0);
    }

    return (
        <div className='home'>
            <div className='home_inner'>
                <img src={form_image} alt="form_image" className='form_image' />
                <div className='inputs_wrapper'>
                    <input className='inputs' type='text' maxLength='20' placeholder='Firstname' onChange={onChangeFirstName} value={props.newUser.firstName} />
                    <input className='inputs' type="text" maxLength='20' placeholder='Lastname' onChange={onChangeLastName} value={props.newUser.lastName} />
                    <input className='inputs' type="text" maxLength='2' placeholder='Age' onChange={onChangeAge} value={props.newUser.age} />
                    <input className='inputs' type="text" maxLength='30' placeholder='Email' onChange={onChangeEmail} value={props.newUser.email} />
                    <div className='gender_change' onChange={onChangeGender}>
                        <input className='gender' type="radio" value="Male" name="gender" /> Male
                        <input className='gender' type="radio" value="Female" name="gender" /> Female
                    </div>
                    <input className='inputs' type="text" maxLength='30' placeholder='Username' onChange={onChangeUsername} value={props.newUser.userName} />
                    <button className='btn_setuser' onClick={setUser}>Set User</button>
                    <div className='added'>{text}</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.homePage.users,
        newUser: state.homePage.newUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserFirstName: (firstName) => {
            dispatch(setUserFirstNameAC(firstName));
        },
        setUserLastName: (lastName) => {
            dispatch(setUserLastNameAC(lastName));
        },
        setUserAge: (age) => {
            dispatch(setUserAgeAC(age))
        },
        setUserEmail: (email) => {
            dispatch(setUserEmailAC(email))
        },
        setUserGender: (gender) => {
            dispatch(setUserGenderAC(gender))
        },
        setUserUsername: (userName) => {
            dispatch(setUserUsernameAC(userName))
        },
        incrementUserId: (userId) => {
            dispatch(incrementUserIdAC(userId))
        },
        setUser: (user) => {
            dispatch(setUserAC(user));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);