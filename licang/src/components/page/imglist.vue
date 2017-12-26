<template>
    <div class="imglist">
        <transition
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
            <div class="box" v-if="showImg">
                <span @click="hide">X</span>
                <div class="imgs">
                    <div v-for="item in items" class="img_self">
                      <img :src="item.url" alt=""  @click.stop="bigImg($event)">
                    </div>
                </div>
            </div>
        </transition>
       <preview :imgSrc="imgSrc" v-if="bigImgShow"></preview>
    </div>
</template>

<script>
  import Preview from './common/preview'
  import {imgBaseUrl} from "./../config/env";
  import {mapState} from 'vuex'
  export default {
    name: "imglist",
    data(){
      return{
        showImg:true,
        imgSrc:imgBaseUrl,
        items:[
          {'url':'../../../static/img/1.jpg'},
          {'url':'../../../static/img/2.jpg'},
          {'url':'../../../static/img/3.jpg'},
          {'url':'../../../static/img/4.jpg'},
          {'url':'../../../static/img/5.jpg'}],
      }
    },
    components:{
      Preview
    },
    methods:{
      hide(){
        setTimeout(()=>{
          this.$router.push('/index')
        },500)

        this.showImg =false

      },
      bigImg(e){
        this.$store.dispatch('priewBigImg');
//        获取当前图片的地址
        this.imgSrc = e.currentTarget.src
      },

    },
    computed:{
      ...mapState(['bigImgShow'])
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .imglist{
        margin: 0.5rem .2rem;
        .box{
            padding: 0 .1rem ;
            background:rgba(0,0,0,0.6);
            position: relative;
            margin-bottom: 0.1rem;
            span{
                position: absolute;
                right: 0.1rem;
                top: 0.1rem;
                font: 0.2rem/0.3rem '';
                color: #fff;
            }
            .imgs{
                padding-top: 0.4rem;
                padding-bottom: 0.1rem;
                .img_self{
                  border:1px solid #fff;
                    width:100%;
                    height: 2rem;
                    margin-bottom: 0.1rem;
                  img{

                    display: block;
                    width:100%;
                    height:100%;
                  }
                }
            }
        }
    }

</style>
