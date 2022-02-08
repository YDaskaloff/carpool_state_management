import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 15,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
});
