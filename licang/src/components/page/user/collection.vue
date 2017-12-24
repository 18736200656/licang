<template>
  <div class="collection">
    <swiper :options="swiperOption" ref="mySwiper" class="swiper_box">
      <swiper-slide v-for="(item,index) in listImgL" :key="index" class="swiper_item">
        <img :src="item.url" alt="" class="show_img">
        <div class="author">
          <img :src="defaultImg" alt="">
          <div class="collUser" @click="$router.push({path:'/concernman'})">
            <h3>长衣服呢过</h3>
            <p>fskadfa </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import{imgBaseUrl} from '../../config/env'
  export default {
    name: "collection",
    data(){
      return{
        defaultImg:imgBaseUrl,
        listImgL: [
          {"url": "../../../static/img/1.jpg"},
          {"url": "../../../static/img/2.jpg"},
          {"url": "../../../static/img/3.jpg"},
          {"url": "../../../static/img/4.jpg"},
          {"url": "../../../static/img/5.jpg"}
        ],
        swiperOption: {
          spaceBetween: 20,
          grabCursor : true,
          setWrapperSize :true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        }
      }
    },
    components:{
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped lang="less" type="text/less">

    .swiper_box{
        width: 100%;
        height: 2.5rem;
        overflow-y: hidden;
        overflow-x: auto;
        .swiper_item{
            width: 2rem;
            height: 100%;
            float: left;
            margin-right: 0.2rem;
            border: 1px solid #999;
            position: relative;
            .show_img{
                display: block;
                height: 100%;
                width: 100%;
            }
            .author{
                width: 100%;
                height: 1rem;
                background: #fff;
                padding: 0.2rem 0 0.2rem 0.2rem;
                border: 1px solid #ddd;
                box-shadow: 0 2px 4px #ddd;
                position: absolute;
                left: 0;
                bottom: -1rem;
                transition: all 0.5s;
                img{
                    width: 0.5rem;
                    height: 0.5em;
                    border-radius: 50%;
                    float: left;

                }
                .collUser{
                    margin-left: 0.1rem;
                    float: left;
                    height: .5rem;
                    text-align: left;
                    h3{font:0.2rem/0.3rem '';
                        font-weight: bold;}
                    p{font:0.16rem/0.2rem '';color:#999;}
                }
            }
            .remove{
                position: absolute;
                left: 0;
                top: -2.5rem;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                transition: all 0.5s;
                span{
                    display: block;
                    width: 0.5rem;
                    height: 0.5rem;
                    border: 1px solid #999;
                    border-radius: 50%;
                    text-align: center;
                    font: 0.25rem/0.5rem '';
                    color: #000;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);

                }
            }

        }
        &:hover .author{
            bottom: 0;
        }
        &:hover .remove{
            top: 0;
        }
    }

</style>
