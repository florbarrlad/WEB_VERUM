import {palette} from '../../utils/theme';

const styles = {
  footerContainer: {
    backgroundColor: palette.lightPink,
    display: 'flex',
    minHeight: 100,
    justifyContent: 'center',
    marginTop: 30,
    padding: 30,
  },
  footerInsideContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 300,
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
};

export default styles;
