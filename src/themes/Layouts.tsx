import { StyleSheet, Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;

const Layouts = StyleSheet.create({
  flexContainer: {
    flex: 1,
    height: HEIGHT,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexFill: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selfEnd: {
    alignSelf: 'flex-end',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  flexRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  flexHeight80: {
    height: 80,
  },
  justfySpactBw: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
});
export default Layouts;
