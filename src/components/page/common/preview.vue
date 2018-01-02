<template>
    <transition name="fade">
        <div class="preview">
            <!--遮罩层-->
            <div class="img_layer">
                <div class="img">
                    <img :src="imgSrc" alt="">
                </div>
                <span class="closeImg" @click.stop="closeImg">x</span>
            </div>
        </div>

    </transition>
</template>

<script>
  export default {
    name: "preview",
    data(){
      return{

      }
    },
    props:['imgSrc'],
    methods:{
      closeImg(){
        this.$store.dispatch('priewBigImg')
      }
    }
  }
</script>

<style scoped type="text/less" lang="less">
/*动画*/
    .fade-enter-active,.fade-leave-active{
        -webkit-transition: all 0.2s linear;
        -moz-transition: all 0.2s linear;
        -ms-transition: all 0.2s linear;
        -o-transition: all 0.2s linear;
        transition: all 0.2s linear;
        -webkit-transform: translate3D(0,0,0);
        -moz-transform: translate3D(0,0,0);
        -ms-transform: translate3D(0,0,0);
        -o-transform: translate3D(0,0,0);
        transform: translate3D(0,0,0);
    }
    .fade-enter,.fade-leave-active{
        transform:translate3D(100%,0,0)
    }
    .preview{
        .img_layer{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0,0,0,1);
            z-index: 1000;
            .img{
                img{
                    max-width: 100%;
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
            .closeImg{
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                bottom: 0.2rem;
                display: inline-block;
                text-align: center;
                width: 0.6rem;
                font: 0.24rem/0.5rem '';
                color: #fff;

            }
        }
    }
</style>