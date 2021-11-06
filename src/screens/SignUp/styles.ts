import {StyleSheet} from 'react-native'
import {myStyles} from '@styles/index'
import {COLORS} from '@styles/vars'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  contentContainer: {
    ...myStyles.phOne,
    paddingTop: 64,
  },
  illustrationImg: {
    alignSelf: 'center',
    paddingTop: 64,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Prompt_700Bold',
    marginVertical: 28,
  },
  navigateToSignUpText: {
    textAlign: 'center',
    marginTop: 8,
  },
})
