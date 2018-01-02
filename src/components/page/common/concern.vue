<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper_box">
        <!-- slides -->
        <swiper-slide v-for="(slide,index) in listImgL" :key="index" class="swiper_item">
            <dl @click="authorDetail">
                <dt><img :src="slide" alt=""></dt>
                <dd>
                    <h3>Jason Wang</h3>
                    <p>Designer</p>
                </dd>
            </dl>
        </swiper-slide>
        <!-- Optional controls -->
    </swiper>
</template>

<script>
  import { imgBaseUrl} from '../../config/env'
  export default {
    name: "concern",
    data() {
      return {
        defalutImg:imgBaseUrl,
        listImgL:[
          '../../../../static/img/1.jpg',
          '../../../../static/img/2.jpg',
          '../../../../static/img/3.jpg',
          '../../../../static/img/1.png'
        ],
        swiperOption: {
          notNextTick: true,
          slidesPerView: 'auto',
          grabCursor : true,
          setWrapperSize :true,
          //centeredSlides: true,
          spaceBetween: 15,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = concern.realIndex+1;
            this.index = concern.realIndex;
          }
        },
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
      this.swiper.slideTo(0,0,false);
    },
    methods:{
      authorDetail(){
        console.log(1)
        this.$router.push({path:'/concernman',params:{}})
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .swiper_box{
        margin: 0.15rem 0;
        .swiper_item{
            border: 1px solid #999;
            height: 0.63rem;
            width: 2rem;
            margin-right: 0.15rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            dt{
                float: left;
                img{
                    display: block;
                    height:0.63rem;
                    width: 0.63rem;
                    margin-right: 0.15rem;
                }
            }
            dd{
                float: left;
                text-align: left;
                padding: 0.1rem 0;
                h3{
                    font: 0.18rem/0.25rem '';
                    font-weight: bolder;
                    color: #000;
                }
                p{
                    font: 0.16rem/0.15rem '';
                    color:#999;
                }
            }
        }
    }
</style>