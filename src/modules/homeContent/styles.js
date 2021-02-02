import {palette} from '../../utils/theme';

const styles = {
  homeCollectionButton: {
    border: ` 0.5px solid ${palette.pink} `,
    color: palette.pink,
    fontWeight: 600,
    height: 50,
    marginTop: 18,
    padding: 10,
    width: 250,
  },
  homeCollectionName: {
    fontFamily: 'Cinzel',
    fontSize: 80,
    margin: '18px 0',
  },
  homeContainer: {
    backgroundColor: palette.pink,
    height: '80%',
    width: '100%',
  },
  homeImage: {
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
  homeImageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  homeImageAndText: {
    display: 'flex',
    height: 700,
    margin: '30px 0',
  },
  homePrimaryImage: {
    height: 900,
    objectFit: 'cover',
    marginTop: 30,
    width: '70%',
  },
  homeSmallImage: {
    height: 500,
    margin: '0 30px',
    objectFit: 'cover',
    width: '20%',
  },
  homeText: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
};

export default styles;
