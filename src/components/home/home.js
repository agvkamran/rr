import React from 'react';
import { connect } from 'react-redux';
import { setUserAC } from '../../redux/homeReducer';
import './home.css';

const Home = () => {
    return (
        <div className='home'>

            <input type='text' placeholder='Lastname' />
            <input type='text' placeholder='Age' />
            <input type='text' placeholder='Email' />
            <input type='text' placeholder='Gender' />
            <input type='text' placeholder='Username' />
            <button>Set User</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: () => {
            dispatch(setUserAC())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);