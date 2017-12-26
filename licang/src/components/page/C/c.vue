<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper_box">
        <swiper-slide v-for="(slide,index) in listImgL" :key="index" class="swiper_item">
          <Clunbo></Clunbo>
          <div class="content">
              <div class="author">
                  <div class="author_name">
                      <h3>Owen Zhao</h3>
                      <p>Designer</p>
                  </div>
                  <div class="concern" @click="concernButton">
                      <span v-if="concernShow" class="active">关注</span>
                      <span v-else >关注</span>
                  </div>
              </div>
              <ul class="star">
                  <li><strong>15</strong> | 作品</li>
                  <li><strong>11122</strong> | 关注者</li>
              </ul>
              <div class="author_intro">
                  <p>
                      I am very glad to be here for interview.My name is YYX.
                      I comme from DLUFL and my major is english special lised in business.
                      Computer,books,films and cilimbing moutains are my favourite.
                  </p>
              </div>
          </div>
        </swiper-slide>
    </swiper>
</template>

<script>
  import Clunbo from './clunbo'
  export default {
    name: "c",
    data(){
      return{
        concernShow:false,
        listImgL:[1,2,3,4],
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
    components:{
      Clunbo
    },
    methods:{
      concernButton(){
        this.concernShow =!this.concernShow
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .swiper_box{
        margin: 0.8rem 0.2rem;
        height: 4.88rem;

        .swiper_item{
            margin-right: 0.15rem;
            width: 2.98rem;
            border: 1px solid #666;
            .content{
                padding: 0.2rem;
                .author{
                    width: 100%;
                    height: 0.35rem;
                    display: flex;
                    justify-content: space-between;
                    .author_name{
                        text-align: left;
                        h3{
                            font: 0.14rem/0.25rem '';
                            color: #000;
                            font-weight: bold;
                        }
                        p{
                            font-size: 0.12rem;
                            color:#666;
                        }
                    }
                    .concern{
                        margin-top: 0.1rem;
                        font: 0.13rem/0.2rem '';
                        .active{
                            display: block;
                            padding:0 0.08rem;
                            background: #000;
                            color: #fff;
                        }
                    }
                }
                ul{
                    margin:0.1rem 0;
                    padding-left: 0;
                    overflow: hidden;
                    li{
                        text-align: left;
                        margin-right: 0.2rem;
                        float: left;
                        font: 0.14rem/0.35rem '';
                        color: #666;
                        strong{
                            color: #000;
                            font-size: 0.15rem;
                            font-weight: 800;
                        }
                    }
                }
                .author_intro{
                    p{
                        text-align: left;
                        font: 0.1rem/0.13rem '';
                        color: #000;
                    }
                }
            }

        }
    }
</style>