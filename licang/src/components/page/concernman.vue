<template>
    <div class="concernman">
        <Header></Header>
        <transition name="fade">
            <section>
                <div class="header">
                    <img :src="defaultImg" alt="">
                    <ul>
                        <li>
                            <strong>45</strong>|
                            <span>作品</span>
                        </li>
                        <li>
                            <strong>18441</strong>|
                            <span>关注者</span>
                        </li>
                    </ul>
                </div>
                <div class="info">
                    <div class="info_name">
                        <strong>had哈市</strong>
                        <span>|</span>
                        <span>shfsd</span>
                    </div>
                    <textarea name="" id="" cols="30" rows="4"
                              placeholder="I am very glad to be here for interview.   My name is YYX . I come from DLUFL and my major is english special lised in business.  Computer, books, ﬁlms and climbing moutains are my favourite.    "
                              v-model="infoText"
                    ></textarea>
                </div>
                <div class="producs">
                    <ul>
                        <li v-for="(item,index) in arr" :key="index">
                            <router-link to="'preview'+item.id">
                                <img :src="item.imgBaseUrl" alt="">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </section>
        </transition>

    </div>
</template>

<script>
    import Header from './common/header/header'
    import {imgBaseUrl} from '../config/env'
  export default {
    name: "concernman",
    data(){
      return{
        defaultImg:imgBaseUrl,
        infoText:'',
        arr:[
          {"id":"1","src":imgBaseUrl},
          {"id":"2","src":imgBaseUrl},
          {"id":"3","src":imgBaseUrl},
          {"id":"4","src":imgBaseUrl},
          {"id":"5","src":imgBaseUrl},
          {"id":"6","src":imgBaseUrl},
          {"id":"7","src":imgBaseUrl},
          {"id":"8","src":imgBaseUrl},
        ]
      }
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .concernman{
        box-sizing: border-box;
        padding:0 0.2rem;
        section{
            overflow: hidden;
            margin-top: .5rem;
            padding: 0.2rem;
            -moz-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            -webkit-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            .header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-content: center;
                img{
                    width: 0.7em;
                    height: 0.7em;
                    border-radius: 50%;
                }
                ul{
                    height: 0.7rem;
                    font-size: 0.2rem;
                    line-height: 0.7rem;
                    li{
                        float: left;
                        strong{

                            color: #000;
                        }
                        span{

                            color: #999;
                        }
                    }
                }
            }
            .info{
                margin-top: 0.2rem;
                text-align: left;
                .info_name{
                    font: 0.2rem/0.35rem '';
                    strong{
                        color: #000;
                    }
                    span{
                        color: #999;
                    }
                }
                textarea{
                    font: 0.16rem/0.2rem '';
                    -width: 100%;
                    border: 0;
                    -height: 1rem;
                }
            }
            .producs{
                 margin-top:0.2rem;
                width: 100%;
                -border: 1px solid #000;
                ul{
                    width: 110%;
                    height: 100%;
                    overflow: auto;
                    li{
                        height: 0.85rem;
                        width: 0.85rem;
                        float: left;
                        margin-right:.18rem ;
                        margin-bottom: 0.18rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>