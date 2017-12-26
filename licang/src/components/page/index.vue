<template>
    <div class="index">
      <div class="box">
        <div class="main" v-for="(item,index) in listImg">
          <img :src="item.url" alt="" class="img_main" @click="$router.push('/imglist')">
          <Indimg></Indimg>
        </div>
      </div>
      <transition name="bounce">
        <UserInfo v-show="show"></UserInfo>
      </transition>
      <preview :imgSrc="imgSrc" v-show="bigImgShow"></preview>
    </div>
</template>

<script>
    import Indimg from './common/indimg'
    import UserInfo from './user/userinfo'
    import {mapState} from 'vuex'
    export default {
      name: "index",
      data(){
        return {
          imgSrc:'',
          listImg: [
            {"url": "../../../static/img/1.jpg"},
            {"url": "../../../static/img/2.jpg"},
            {"url": "../../../static/img/3.jpg"},
            {"url": "../../../static/img/4.jpg"},
            {"url": "../../../static/img/5.jpg"}
          ],
          swiperOption: {
            // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            //mousewheel: true,
            //spaceBetween: 20,
            slidesPerView: 'auto',
            setWrapperSize :true,
            onSlideChangeEnd: swiper => {
              //这个位置放swiper的回调方法
              this.page = swiper.realIndex+1;
              this.index = swiper.realIndex;
            }
          }
        }

      },
      components:{
        UserInfo,
        Indimg
      },
      created(){

      },
      methods:{
        bigImg(e){
          this.$store.dispatch('priewBigImg')
          this.imgSrc = e.currentTarget.src
        }
      },
      computed:{
        ...mapState(['show','bigImgShow']),
        swiper() {
          return this.$refs.mySwiper.swiper
          consolelog(this.$refs.mySwiper)
        }

      },
      mounted () {
        //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
        //this.swiper.slideTo(3, 1000, false);

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
    75% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  .index{
      box-sizing: border-box;
      padding:0 .2rem;
      margin-top:0.48rem;
      margin-bottom: 0.8rem;
      .box {
        .main {
          width: 100%;
          height: 3.4rem;
          overflow: hidden;
          margin-bottom: 0.2rem;
          -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
          -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, .2),1px -3px 5px rgba(0, 0, 0, .2), 3px 0 3px rgba(0, 0, 0, .2) inset;
          .img_main {
            display: block;
            width: 100%;
            height: 2rem;
            border: 1px solid #999;
          }

        }
      }
  }
</style>
