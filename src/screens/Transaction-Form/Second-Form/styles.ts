import {StyleSheet} from 'react-native'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

export const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
    height: '100%',
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  modal: {
    height: SCREEN_SIZE.fullHeight*0.2
  }
})
