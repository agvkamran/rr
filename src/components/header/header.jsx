import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    console.log(props);
    return (
        <header>
            <Link to='/'>Home</Link>
            <div className='users_count_block'><Link to='/users'>Users</Link><p className='users_count'>{props.count}</p></div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.homePage.users.length
    }
}

export default connect(mapStateToProps, null)(Header);
