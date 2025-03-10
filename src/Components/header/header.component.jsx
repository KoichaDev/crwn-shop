import React from 'react';
import { Link } from 'react-router-dom';
/* connect is an HOC */
import { connect } from 'react-redux';
import './header.style.scss';
import { auth } from './../../firebase/firebase.utils';

/* ReactComponent Special syntax in React to import SVG */
import { ReactComponent as Logo } from './../../assets/crown.svg';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
