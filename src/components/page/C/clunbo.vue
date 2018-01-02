<template>
    <div @click.stop="$router.push({path:'content'})">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_box1">
            <swiper-slide v-for="(slide,index) in listImgL" :key="index" class="swiper_item1"
                         >
                <img :src="slide" alt="">
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
  export default {
    name: "clunbo",
    data(){
      return{
        listImgL:[
          '../../../../../static/img/7.jpg',
          '../../../../../static/img/8.jpg',
          '../../../../../static/img/9.jpg',
          '../../../../../static/img/10.jpg',
          '../../../../../static/img/11.jpg',
        ],
        swiperOption: {
          notNextTick: true,
          slidesPerView: 'auto',
          //effect:"flip", //切换效果
          pagination: '.swiper-pagination',
          //centeredSlides: true,
          //paginationType:'bullets',
         // spaceBetween: 30,
          paginationClickable :true,
          //grabCursor : true,  //拖拽的样式 设置true是小手
          setWrapperSize :true,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = concern.realIndex+1;
            this.index = concern.realIndex;
          }
        }
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
    methods:{
      jump(){
        console.log(1)
      }
    }

  }
</script>

<style scoped type="text/less" lang="less">
    .swiper_container{
        margin: 0;
    }
    .swiper_box1{
        height: 3em;
        width: 2.98rem;
        .swiper_item1{
            width: 2.98rem;
            height: 2.98rem;
            border: 1px solid #999;
            position: relative;
            img{
                display: block;
                height: 100%;
                width: 100%;
            }
        }
        .swiper-pagination{
            position: absolute;
            bottom: 0.2rem;
            a{
                display: inline-block;
                width: 0.1rem;
                height: 0.1rem;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                background: #000;
            }
        }
    }

</style>