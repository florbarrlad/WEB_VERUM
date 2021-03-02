import React from 'react';

import styles from './styles';
import logo from '../../assets/logo.png';
import {AIR, FIRE, GROUND, WATER} from '../../utils/constants';

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <img src={logo} alt='Verum' style={styles.headerLogo} />
      <div style={styles.headerCollections}>
        <button style={styles.headerButton}>{AIR}</button>
        <button style={styles.headerButton}>{FIRE}</button>
        <button style={styles.headerButton}>{GROUND}</button>
        <button style={styles.headerButton}>{WATER}</button>
      </div>
    </div>
  );
};
export default Header;
