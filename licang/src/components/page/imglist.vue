<template>
    <div class="imglist">
        <Header></Header>
        <button @click="show=!show">显示</button>
        <transition name="bounce">
            <div class="box" v-if="show">
                <span>X</span>
                <div class="imgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import Header from './common/header/header'
  export default {
    name: "imglist",
    data(){
      return{
        show:true
      }
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less" type="text/less">
    bounce-enter-active {
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
    .imglist{
        padding: 0 .2rem;
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
                div{
                    background: #fff;
                    height: 2rem;
                    margin-bottom: 0.1rem;
                }
            }
        }
    }

</style>