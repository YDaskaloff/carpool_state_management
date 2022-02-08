import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  workShopsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreCarsButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 7,
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginTop: 15,
    height: 30,
  },
  moreCarsInner: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 25,
  },
});
