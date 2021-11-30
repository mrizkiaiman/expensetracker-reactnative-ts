import {StyleSheet} from 'react-native'
import {myStyles} from '@styles/index'
import {COLORS, SPACES} from '@styles/vars'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.background,
    height: '100%'
  },
  contentContainer: {
    ...myStyles.phOne,
    
  },
  illustrationImg: {
    alignSelf: 'center',
    marginLeft: SPACES.oneSpace + SPACES.halfSpace,
  },
  title: {
    fontSize: 24,
    ...myStyles.phOne,
    fontFamily: 'Prompt_700Bold',
    marginVertical: SPACES.twoSpace,
  },
})
