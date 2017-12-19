<template>
    <div class="user_info">
        <div class="box">
            <Header></Header>
            <header>
                <img :src="defaultImg" alt="" class="userImg">
                <div class="name">
                    <h3>张一等</h3>
                    <p>自我介绍</p>
                </div>
            </header>
            <div class="info">
                <ul class="infoDetail">
                    <li>身份
                        <dl v-show="ddshow">
                            <dd>QQ
                                <div v-show="divshow">
                                    <input type="text" class="qq" maxlength="10" v-model="qq">
                                    <i class="el-icon-edit" @click="clearText($el)"></i>
                                </div>
                            </dd>
                            <dd>电话
                                <div>
                                    <input type="text" class="phone" maxlength="11" v-model="phone">
                                    <i class="el-icon-edit" @click="clearText($el)"></i>
                                </div>
                            </dd>
                            <dd>介绍</dd>
                            <dd>经验</dd>
                            <dd>领域</dd>
                            <dd>区域</dd>
                        </dl>
                    </li>
                    <li>关注</li>
                    <li>收藏</li>
                    <li>客服</li>
                    <li>设置</li>

                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import{imgBaseUrl} from '../../config/env'
    import Header from '../common/header/header'

    let Oul = document.getElementsByClassName('infoDetail')[0];
    let lis = document.getElementsByClassName('li');
  export default {
    name: "userinfo",
    data(){
      return{
        ddshow:true,
        divshow:false,
        defaultImg:imgBaseUrl,
        qq:'',
        phone:''
      }
    },
    created(){

    },
    components:{
      Header
    },
    methods:{
      clearText(el){
        console.log(el.targetName)
        el.targetName.previousSbiling.value = ''
      },


    }

  }
</script>

<style scoped lang="less" type="text/less">
    .user_info{
        padding:0 .15rem;
    }
    .box{
        border: 1px solid #ddd;
        box-shadow: 0 0 4px #ddd;
        overflow: hidden;
    }
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


</style>