import * as vars from './vars'

export const myStyles = {
  //Size
  wFull: {width: vars.SCREEN_SIZE.fullWidth},
  hFull: {height: vars.SCREEN_SIZE.fullHeight},

  //Margin
  mHalf: {margin: vars.SPACES.halfSpace},
  //Margin-top
  mtHalf: {marginTop: vars.SPACES.halfSpace},
  mtOne: {marginTop: vars.SPACES.oneSpace},
  mtTwo: {marginTop: vars.SPACES.twoSpace},
  mtThree: {marginTop: vars.SPACES.twoSpace + vars.SPACES.oneSpace},
  //Margin-bottom
  mbOne: {marginBottom: vars.SPACES.oneSpace},
  mbTwo: {marginBottom: vars.SPACES.twoSpace},
  mbHalf: {marginBottom: vars.SPACES.halfSpace},
  //Margin-left
  mlOne: {marginLeft: vars.SPACES.oneSpace},
  mlHalf: {marginLeft: vars.SPACES.halfSpace},
  //Margin-right
  mrHalf: {marginRight: vars.SPACES.halfSpace},
  mrOne: {marginRight: vars.SPACES.oneSpace},
  //Margin-vertical
  mvHalf: {marginTop: vars.SPACES.halfSpace, marginBottom: vars.SPACES.halfSpace},
  mvOne: {marginTop: vars.SPACES.oneSpace, marginBottom: vars.SPACES.oneSpace},
  mvTwo: {marginTop: vars.SPACES.twoSpace, marginBottom: vars.SPACES.twoSpace},
  //Margin-horizontal
  mhHalf: {marginLeft: vars.SPACES.halfSpace, marginRight: vars.SPACES.halfSpace},
  mhOne: {marginLeft: vars.SPACES.oneSpace, marginRight: vars.SPACES.oneSpace},
  mhTwo: {marginLeft: vars.SPACES.twoSpace, marginRight: vars.SPACES.twoSpace},

  //Padding
  pHalf: {padding: vars.SPACES.halfSpace},
  pOne: {padding: vars.SPACES.oneSpace},
  pOneHalf: {padding: vars.SPACES.oneSpace + vars.SPACES.halfSpace},
  pTwo: {padding: vars.SPACES.twoSpace},
  //Padding-left
  plHalf: {paddingLeft: vars.SPACES.halfSpace},
  plOne: {paddingLeft: vars.SPACES.halfSpace},
  //Padding-right
  prOne: {paddingRight: vars.SPACES.halfSpace},
  //Padding-vertical
  pvHalf: {paddingTop: vars.SPACES.halfSpace, paddingBottom: vars.SPACES.halfSpace},
  pvOne: {paddingTop: vars.SPACES.oneSpace, paddingBottom: vars.SPACES.oneSpace},
  //Padding-horizontal
  phHalf: {paddingLeft: vars.SPACES.halfSpace, paddingRight: vars.SPACES.halfSpace},
  phOne: {paddingLeft: vars.SPACES.oneSpace, paddingRight: vars.SPACES.oneSpace},
  phOneHalf: {paddingLeft: vars.SPACES.oneHalfSpace, paddingRight: vars.SPACES.oneHalfSpace},

  //Text
  heading: {fontWeight: 700},
  textCenter: {textAlign: 'center'},
}

