import {StyleSheet} from 'react-native'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tabNavigator: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    height: 90,
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  tabIconText: {
    color: 'red',
    marginTop: 8,
    fontSize: 11,
    fontWeight: '600',
  },
  button: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: '40%',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
  },
})
