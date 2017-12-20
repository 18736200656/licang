<template>
    <div class="pre">
        <transition name="fade">
            <section class="box" v-show="showDetail">
                <img :src="defalult" alt="">
                <span @click.stop="hide">x</span>
            </section>
        </transition>
    </div>
</template>

<script>
    import {imgBaseUrl} from "../config/env";

    export default {
    name: "preview",
    data(){
      return{
        defalult:imgBaseUrl,
        showDetail:true
      }
    },
    methods:{
      hide(){
        let id = this.$route.params.id;
        this.showDetail =false;
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .pre{

        .box{
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: #262626;
            z-index:2;
            img{
                position: absolute;
                display:block;
                border: 1px solid #fff;
                width: 90%;
                height: 3rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            span{
                display: block;
                text-align: center;
                height: 0.5rem;
                width: 0.5rem;
                font: 0.3rem/0.5rem '';
                color: #fff;
                position: absolute;
                bottom: 0.5rem;
                left: 50%;
                transform: translateX(-50%);

            }
        }
    }
</style>