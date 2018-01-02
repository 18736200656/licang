import * as types from './mutation-type'

export default{
  [types.SHOW](state){
    state.show = !state.show
  },
  [types.BIG_IMG_SHOW](state){
    state.bigImgShow = !state.bigImgShow
  }
}