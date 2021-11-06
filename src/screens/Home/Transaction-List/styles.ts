import {StyleSheet} from 'react-native'
import {myStyles} from '@styles/index'
import {COLORS} from '@styles/vars'

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    paddingTop: 14,
    paddingBottom: 18,
  },
  contentContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  accountTextContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
})
