import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  loginBtn: {
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 25,
    width: '80%',
  },
  loginImg: {
    height: '70%',
    width: '100%',
    borderBottomRightRadius: 130,
  },
  loginTxt: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabLabelFocused: {
    color: 'black',
    fontWeight: 'bold',
  },
  tabVetLabelFocused: {
    color: 'black',
  },
  labelFocused: {
    color: 'black',
    fontWeight: 'bold',
  },
  primaryBgColor: {
    backgroundColor: '#1DB954',
  },
  bodyDesign: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  },
  dataText: {
    color: 'black',
  },
  homeHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: 'green',
  },
  cartSummary: {
    height: 60,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  cartDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  cartTotalText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewCartText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default AppStyles;
