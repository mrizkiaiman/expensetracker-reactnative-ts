import { StyleSheet } from "react-native"
import {SCREEN_SIZE, COLORS} from '@styles/vars'

export const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 64,
    height: '100%',
  },
  illustration: {
    alignSelf: 'center',
  },
  titleText: {
    marginTop: 48,
    width: SCREEN_SIZE.fullWidth,
    paddingStart: 32,
  },
  transactionTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  transactionTypeBox: {
    borderWidth: 1,
    borderColor: COLORS.line,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_SIZE.fullWidth * 0.385,
    width: SCREEN_SIZE.fullWidth * 0.385,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  iconContainer: {
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  transactionTypeText: {
    color: 'white',
    fontSize: 20,
  },
})
