import React from 'react';

import styles from './styles';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerInsideContainer}>
        <p style={styles.footerTitle}>LA EMPRESA</p>
        <p>Sobre Nosotros</p>
        <p>Contacto</p>
      </div>
      <div style={styles.footerInsideContainer}>
        <p style={styles.footerTitle}>COMPRAS</p>
        <p>Guia de compras</p>
        <p>Cambios</p>
        <p>Cuidados de las prendas</p>
      </div>
      <div style={styles.footerInsideContainer}>
        <p style={styles.footerTitle}>REDES SOCIALES</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
    </div>
  );
};
export default Footer;
