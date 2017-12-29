<template>
      <div class="user_info">
        <div class="box">
          <header>
            <img :src="defaultImg" alt="" class="userImg">
            <div class="name">
              <h3>张一等</h3>
              <p>自我介绍</p>
            </div>
          </header>
          <div class="info">
            <ul class="infoDetail">
              <li @click.stop="ddshow=!ddshow">身份
                <dl v-show="ddshow">
                  <dd @click.stop="divshow=!divshow">QQ
                    <div v-show="divshow">
                      <input type="text" class="qq" maxlength="10" v-model="qq">
                      <i class="el-icon-edit" @click.stop="clearText($event)"></i>
                    </div>
                  </dd>
                  <dd>电话

                    <div v-show="divshow">
                      <input type="text" class="phone" maxlength="11" v-model="phone">
                      <i class="el-icon-edit" @click.stop="clearText($event)"></i>
                    </div>
                  </dd>
                  <dd>介绍</dd>
                  <dd>经验</dd>
                  <dd>领域</dd>
                  <dd>区域</dd>
                </dl>
              </li>
              <li @click="concerShow = !concerShow">关注
                <Concern v-show="concerShow"></Concern>
              </li>
              <li @click="colecShow = !colecShow">收藏
                <Collection v-show="colecShow"></Collection>
              </li>
              <li @click="custom =!custom">客服
                <dl v-show="custom">
                  <dd >021-40058886</dd>
                </dl>
              </li>
              <li @click="set = !set">设置
                <dl v-show="set">
                    <dd>设置111</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>

      </div>
</template>

<script>
  import Concern from './../common/concern'
  import Collection from './../user/collection'
  import{imgBaseUrl} from '../../config/env'
  import {mapState} from 'vuex'
  export default {
    name: "userinfo",
    data(){
      return{
        ddshow:true,
        divshow:false,
        concerShow:false,
        colecShow:false,
        custom:false,
        set:false,
        divShow:false,
        defaultImg:imgBaseUrl,
        qq:'',
        phone:'',
      }
    },
    created(){
        this.clearText();  //清楚输入框的内容
    },
    methods:{
      clearText(el){
        if(!el){
          return false
        }
        console.log(el.target)
        console.log(el.target.parentNode.firstChild)
        el.target.parentNode.firstChild.value = '';
      },

    },
    components:{
      Concern,
      Collection
    },
    mounted(){
      let dds = document.getElementsByTagName('dd');
      for(var i=0;i<dds.length;i++){
        dds[i].onclick=function () {
          this.divshow =!this.divshow
        }
      }
    }

  }
</script>

<style scoped lang="less" type="text/less">
    .user_info{
      transform-origin:0 0;
      -ms-transform-origin:0 0;
      -webkit-transform-origin:0 0;
      -moz-transform-origin:0 0;
      -o-transform-origin:0 0;
      position: fixed;
      left:0.2rem;
      top:0.48rem;
      right:0.35rem;
      bottom:0.8rem;
      z-index:1;
      background:#fff;
      overflow: auto;
    }
    .box{
        border: 1px solid #ddd;
        -moz-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
        -webkit-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
        box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
        overflow: hidden;

        header{
            height: .5rem;
            padding:0.2rem;
            .userImg{
                float: left;
                display: block;
                height: 0.5rem;
                width: 0.5rem;
                border-radius: 50%;
            }
            .name{
                margin-left: 0.3rem;
                float: left;
                height: .5rem;
                h3{font:0.2rem/0.3rem '';
                    font-weight: bold;}
                p{font:0.16rem/0.2rem '';color:#999;}
            }
        }
        .info{
            margin-top: .5rem;
            ul{
                padding: .2rem 0;
                li{
                    margin-left: 0.2rem;
                    padding-right: 0.3rem;
                    text-align: left;
                    font-weight: bold;
                    font: .24rem/.5rem '';
                    position: relative;
                    dl{
                        dd{
                            width: 100%;
                            font:.16rem/.4rem '';
                            color: #ccc;
                            padding-left: 0.2rem;
                            div{
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                input{
                                    display: block;
                                    outline: none;
                                    border: none;
                                    border-bottom: 1px solid #ddd;
                                    height: .3rem;
                                    font:0.2rem/0.3rem '';
                                    color: #000;
                                    width: 70%;
                                }
                                i{
                                    font-size: 0.24rem;
                                }
                            }

                        }
                    }
                }
            }
        }
    }


</style>
