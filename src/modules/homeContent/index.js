import React from 'react';

import Footer from '../footer';
import styles from './styles';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <div style={styles.homeImageContainer}>
        <img
          style={styles.homePrimaryImage}
          src='https://res.cloudinary.com/dmfuljirv/image/upload/v1612303351/44_on3jhi.jpg'
          alt='tierra'
        />
      </div>
      <div style={styles.homeImageAndText}>
        <img
          style={styles.homeImage}
          src='https://res.cloudinary.com/dmfuljirv/image/upload/v1612305306/4_c7hg1c.jpg'
          alt='tierra'
        />
        {/* <div style={styles.homeText}>
          <p style={styles.homeCollectionName}>TIERRA</p>
          Coleccion de sastreria moderna
          <button style={styles.homeCollectionButton}>
            DESCUBRI LA COLECCION
          </button>
        </div> */}
      </div>
      <div style={styles.homeImageContainer}>
        <img
          style={styles.homeSmallImage}
          src='https://res.cloudinary.com/dmfuljirv/image/upload/v1612302885/1_h8fje1.jpg'
          alt='tierra'
        />
        <img
          style={styles.homeSmallImage}
          src='https://res.cloudinary.com/dmfuljirv/image/upload/v1612304120/6_i538gq.jpg'
          alt='tierra'
        />
        <img
          style={styles.homeSmallImage}
          src='https://res.cloudinary.com/dmfuljirv/image/upload/v1612305285/11_sd1oxu.jpg'
          alt='tierra'
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
