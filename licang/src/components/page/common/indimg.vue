<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" class="swiper_box">
            <swiper-slide v-for="(slide,index) in listImgL" :key="index" class="swiper_item">
                <img :src="slide" alt="" @click="bigImg($event)">
            </swiper-slide>
        </swiper>
        <Preview :imgSrc="imgSrc" v-show="bigImgShow"></Preview>
    </div>
</template>

<script>


  import Preview from './preview'
  import {mapState} from 'vuex'
  export default {
    name: 'ind-img',
    data() {
      return {
        imgSrc:'',
        listImgL:[
          '../../../../../static/img/1.jpg',
          '../../../../../static/img/2.jpg',
          '../../../../../static/img/3.jpg',
          '../../../../../static/img/4.jpg',
          '../../../../../static/img/5.jpg',
        ],
        swiperOption: {
          notNextTick: true,
          slidesPerView: 'auto',
          setWrapperSize :true,
          spaceBetween: 15,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      ...mapState(['bigImgShow'])
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 1000, false)
      this.$emit('big',this.imgSrc);
    },
    components:{
      Preview
    },
    methods:{
      bigImg(e){
        console.log(this.imgSrc)
        console.log(e.currentTarget.src)
        this.$store.dispatch('priewBigImg')

        this.imgSrc = e.currentTarget.src;

      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
    .swiper_box{
        margin: 0.2rem;
        .swiper_item{
            width:1.38rem ;
            height: 0.98rem;
            border: 1px solid #999;
            border-radius: 0.08rem;
            img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 0.08rem;
            }
        }
    }

</style>