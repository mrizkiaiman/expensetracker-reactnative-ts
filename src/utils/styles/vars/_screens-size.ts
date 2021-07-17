import {Dimensions} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export const SCREEN_SIZE = {
  fullWidth: SCREEN_WIDTH,
  fullHeight: SCREEN_HEIGHT,
}

export const DEVICE_SIZE = {
  ip7: {
    height: 667,
    width: 375,
  },
  ipx: {
    height: 896,
    width: 414,
  },
}
