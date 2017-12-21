<template>
    <div class="user_info">
     <Header :show="show" ></Header>
      <button @click="change">开关</button>
      <transition
        enter-active-class="animated rotateInDownLeft"
        leave-active-class="animated rotateOutUpLeft"
      >
        <div class="box" v-if="show">
            <header>
                <img :src="defaultImg" alt="" class="userImg">
                <div class="name">
                    <h3>张一等</h3>
                    <p>自我介绍</p>
                </div>
            </header>
            <div class="info">
                <ul class="infoDetail">
                    <li @click="ddshow=!ddshow">身份
                        <transition
                          enter-active-class="animated slideInDown"
                          leave-active-class="animated slideOutUp"
                        >
                          <dl v-show="ddshow">
                            <dd>QQ
                              <div v-show="divshow">
                                <input type="text" class="qq" maxlength="10" v-model="qq">
                                <i class="el-icon-edit" @click="clearText($event)"></i>
                              </div>
                            </dd>
                            <dd>电话
                              <div>
                                <input type="text" class="phone" maxlength="11" v-model="phone">
                                <i class="el-icon-edit" @click="clearText($event)"></i>
                              </div>
                            </dd>
                            <dd>介绍</dd>
                            <dd>经验</dd>
                            <dd>领域</dd>
                            <dd>区域</dd>
                          </dl>
                        </transition>

                    </li>
                    <li>关注</li>
                    <li>收藏</li>
                    <li>客服</li>
                    <li>设置</li>

                </ul>
            </div>
        </div>
      </transition>
    </div>
</template>

<script>
  import Header from '../common/header/header'
    import{imgBaseUrl} from '../../config/env'
  export default {
    name: "userinfo",
    data(){
      return{
        ddshow:true,
        divshow:false,
        defaultImg:imgBaseUrl,
        qq:'',
        phone:'',
        show:true
      }
    },
    created(){
      //this.$store.dispatch('change')
    },
    methods:{
      clearText(el){
        console.log(el.target)
        console.log(el.target.parentNode.firstChild)
        el.target.parentNode.firstChild.value = '';

      },
      change(){
        this.show = !this.show
      }
    },
    components:{
      Header
    }

  }
</script>

<style scoped lang="less" type="text/less">
    .user_info{
        padding:0 .15rem;
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
                    margin-left: 0.5rem;
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
