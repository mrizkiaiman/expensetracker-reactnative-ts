import {StyleSheet} from 'react-native'
import {myStyles} from '@styles/index'
import {RAW_COLORS, SPACES} from '@styles/vars'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: RAW_COLORS.background,
    flex: 1,
  },
  contentContainer: {
    ...myStyles.phOne,
    paddingTop: 64,
  },
  illustrationImg: {
    alignSelf: 'center',
    marginLeft: SPACES.oneSpace + SPACES.halfSpace,
    marginTop: -SPACES.twoSpace,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Prompt_700Bold',
    marginVertical: SPACES.twoSpace,
  },
})
