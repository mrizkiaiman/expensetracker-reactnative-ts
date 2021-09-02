export default class Routes {
  private static _PREFIX = 'app'
  private static _TAB = 'doc'

  static SIGN_IN = `/${Routes._PREFIX}/sign-in`
  static SIGN_UP = `/${Routes._PREFIX}/sign-up`

  static BOTTOM_TAB = `/${Routes._PREFIX}/${Routes._TAB}`
  static HOME = `/${Routes._PREFIX}/${Routes._TAB}/home`
  static STATS = `/${Routes._PREFIX}/${Routes._TAB}/stats`
  static PROFILE = `/${Routes._PREFIX}/${Routes._TAB}/profile`
  static DAILY = `/${Routes._PREFIX}/${Routes._TAB}/daily`
  static TRANSACTION_CREATE = `/${Routes._PREFIX}/${Routes._TAB}/create-transaction`

  static ACCOUNT_LIST = `/${Routes._PREFIX}/account/list`
  static ACCOUNT_FORM = `/${Routes._PREFIX}/account/form`
}
