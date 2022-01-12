import { StyleSheet } from 'react-native'
import { COLORS, SCREEN_SIZE } from '@styles/vars'

export const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: '100%',
  },
  mainContainer: {
    // margin: 18,
    marginTop: 48,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginVertical: 18,
  },
  listContainer: {
    marginHorizontal: 18,
    paddingBottom: SCREEN_SIZE.fullHeight * 0.3,
  },
  filterIconContainer: {
    marginRight: 8,
  },
  filterIcon: {
    width: 25,
    height: 25,
    marginRight: 12,
  },
  menuIconText: {
    marginStart: 4,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
})
