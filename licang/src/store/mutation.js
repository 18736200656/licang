import * as types from './mutation-type'

export default{
  [types.SHOW](state){
    state.show = !state.show
  }
}