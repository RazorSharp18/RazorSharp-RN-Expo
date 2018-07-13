import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '$whiteColor',
    fontSize: 25,
    fontFamily: 'montserrat'
  },
  contentContainer: {
    flex: 1
  },
  restaurantCard: {
    height: 200,
    width: 175,
    backgroundColor: '$redColor'
  },
  restaurantCardTopContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '$whiteColor',
    marginHorizontal: '1.5%'
  },
  restaurantCardTitle: {
    fontFamily: 'montserratBold',
    position: 'absolute',
    top: '2%',
    left: '2.5%'
  },
  restaurantCardBottomContainer: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
    marginHorizontal: '1.5%'
  },
  restaurantCardMetaName: {
    fontSize: 15,
    fontFamily: 'montserrat'
  },
  restaurantCardMetaDate: {
    fontSize: 13,
    fontFamily: 'montserratLight'
  }
});

export default styles;