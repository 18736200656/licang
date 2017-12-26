<template>
    <div class="f">
        <div class="like_box" v-for="(item,index) in listImg">
            <div class="img">
                <img :src="item" alt="">
            </div>
            <div class="cont">
                <h3>英国设计鬼才- PAUL SMITH世界巡回大展</h3>
                <p>充满活力与激情的设计师顽童Paul Smith 将于10/9亲临义仓美术管进行展览开幕仪式。
                于此同时，姜维观众带来关于Hello My Name is Paul Smith展览的精彩故事 谈谈Paul Smith
                杜宇时尚、创作、艺术、生活与人生的启发与哲理。</p>
                <div class="con_bot">
                    <div class="like" @click="likeFun($event)">
                        <span class="active" v-if="likeShow"></span>
                        <span class="kong" v-else></span>
                    </div>
                    <div class="date">
                        <strong>10</strong> |
                        <strong>SAT</strong>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: "f",
    data(){
      return{
        likeShow:false,
        listImg:[
          '../../../../static/img/1.jpg',
          '../../../../static/img/2.jpg',
          '../../../../static/img/3.jpg',
          '../../../../static/img/4.jpg'
        ]
      }
    },
    methods:{
      likeFun(e){
        this.likeShow = !this.likeShow
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .f{
        margin: 0.6rem 0.2rem 0.8rem;
        .like_box{
            border: 1px solid #666;
            margin-bottom: 0.2rem;
            width: 100%;
            height:3.43rem ;
            .img{
                height: 2rem;
                width: 100%;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .cont{
                padding:.15rem;
                box-sizing: border-box;
                h3{
                    font: 0.15rem/0.25rem '';
                    color:#000;
                }
                p{
                    text-align: left;
                    font: 0.12rem/0.15rem '';
                    color:#666;
                }
                .con_bot{
                    height: 0.2rem;

                    .like{
                        float: left;

                        span{
                            margin-top: 0.05rem;
                            display: block;
                            width: 0.2rem;
                            height: 0.2rem;
                            background: url("../../../assets/image/like_active.png") no-repeat center;
                        }
                        .active{
                            background: url("../../../assets/image/like_active.png") no-repeat center;
                        }
                        .kong{
                            background: url("../../../assets/image/like.png") no-repeat center;
                        }
                    }
                    .date{
                        float: right;
                        font: 0.1rem/0.2rem '';
                        strong{
                            color: #000;
                        }
                    }
                }
            }
        }
    }
</style>