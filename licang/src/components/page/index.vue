<template>
    <div class="index">
        <transition name="bounce">
            <div class="box" v-if="show">
              11
                <!--<div class="main">-->
                    <!--<img src="" alt="" class="img_main">-->
                    <!--<div class="swiper-container img_list">-->
                      <!--<div class="swiper-wrapper">-->
                        <!--<div class="swiper-slide"-->
                             <!--v-for="(item,index) in listImgL" :key="index"-->
                        <!--&gt;{{item}}</div>-->
                      <!--</div>-->
                      <!--<div class="swiper-pagination"></div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            listImgL:[1,2,3,4,5],
            show:true
          }
        },
       created(){
         //console.log(this)

       },
       mounted(){
//        new Swiper('.swiper-container', {
//           slidesPerView: 3,
//           spaceBetween: 30,
//           pagination: {
//            el: '.swiper-pagination',
//            clickable: true,
//          },
//         });

       },
        components:{

        },
        methods:{

        }
    }
</script>

<style scoped lang="less" type="text/less">
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
    .index{
        box-sizing: border-box;
        padding:0 .2rem;
        margin-top:0.48rem;
        .box {
          .main {
            width: 100%;
            height: 3.4rem;
            overflow: hidden;
            margin-bottom: 0.2rem;
            background: #ddd;
            -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
            -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
            .img_main {
              display: block;
              width: 100%;
              height: 2rem;
              border: 1px solid #999;
            }
            .img_list {
              width: 200%;
              background: #fff;
              padding: 0.2rem 0;
              height: 1.4rem;
              border: 1px solid #ddd;
              /*li {*/
                /*float: left;*/
                /*margin-left: 0.2rem;*/
                /*background: #ccc;*/
                /*-webkit-border-radius: 4px;*/
                /*-moz-border-radius: 4px;*/
                /*border-radius: 4px;*/
                /*width: 1.2rem;*/
                /*height: 100%;*/
              /*}*/
              .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: #fff;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
              }

            }

          }
        }

    }
</style>
