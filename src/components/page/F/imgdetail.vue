<template>
    <div class="imgdetail" v-show="detailShow">
        <span @click="closePop">x</span>
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_box">
            <swiper-slide v-for="(slide,index) in listImgL" :key="index" class="swiper_item">
                <img :src="slide" alt="" @click.stop.prevent="bigImg($event)">
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination">

            </div>
        </swiper>
        <div class="imgIntro">
            <h3>英国设计鬼才- PAUL SMITH世界巡回大展</h3>
            <p>
                充满活力与激情的设计师顽童Paul Smith 将于10/9亲临义仓美术管进行展览开幕仪式。
                于此同时，姜维观众带来关于Hello My Name is Paul Smith展览的精彩故事 谈谈Paul Smith
                杜宇时尚、创作、艺术、生活与人生的启发与哲理。
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "imgdetail",
    data(){
      return{
        detailShow:true,
        listImgL:[
          '../../../../static/img/1.jpg',
          '../../../../static/img/2.jpg',
          '../../../../static/img/3.jpg',
          '../../../../static/img/4.jpg'
        ],
        swiperOption: {
          notNextTick: true,
          slidesPerView: 'auto',
          grabCursor : true,
          setWrapperSize :true,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = concern.realIndex+1;
            this.index = concern.realIndex;
          }
        },

      }
    },
    methods:{
      closePop(){
        this.detailShow =false
        this.$router.push('f')
      }
    },
    //定义这个sweiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 1000, false);
    },
  }
</script>

<style scoped type="text/less" lang="less">
.imgdetail{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom:0;
    background: #000;
    padding: 0.2rem;
    span{
        text-align: right;
        display: block;
        font-size:0.3rem;
        color: #fff;
    }
    .swiper_box{
        margin: 0.2rem 0;
        height: 4.5rem;
        .swiper_item{
            width: 3.4rem;
            height: 4.5rem;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
    .imgIntro{
        padding-top: 0.1rem;
        text-align: left;
        h3{
            font-size: 0.16rem;
            color: #fff;
            margin-bottom: 0.1rem;
        }
        p{
            font: 0.12rem/0.16rem '';
            color: #fff;
        }
    }
}
</style>