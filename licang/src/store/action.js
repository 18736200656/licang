import * as types from './mutation-type'

export default {
  changeShow({commit}){
    commit(types.SHOW)
  },
  priewBigImg({commit}){
    commit(types.BIG_IMG_SHOW)
  }
}