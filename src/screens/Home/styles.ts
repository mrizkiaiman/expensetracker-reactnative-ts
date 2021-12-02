import {StyleSheet} from 'react-native'
import {COLORS, SCREEN_SIZE} from '@styles/vars'


export const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.background,
  },
  mainContainer: {
    paddingBottom: 180,
  },
  contentContainer: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: COLORS.line,
    borderBottomWidth: 1,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseStatsContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  titleText: {
    color: COLORS.primary,
  },
  boxMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  boxMenu: {
    height: 100,
    width: 100,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  boxMenuText: {
    color: 'white',
    fontSize: 12,
    marginTop: 12,
  },
  boxMenuTransparent: {
    backgroundColor: COLORS.transparent,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
  },
  incomeText: {
    fontSize: 18,
  },
  expenseText: {
    fontSize: 18,
  },
  squareMenuButtonContainer: {
    marginTop: 16,
    backgroundColor: COLORS.transparent,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  squareMenuButton: {
    height: SCREEN_SIZE.fullHeight * 0.44,
    width: SCREEN_SIZE.fullWidth * 0.43,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 8,
    paddingTop: 24,
    paddingStart: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  squareMenuButtonIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareMenuButtonTextContainer: {
    marginTop: 32,
  },
  emptyStateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})