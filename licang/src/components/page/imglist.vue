<template>
    <div class="imglist">
        <Header></Header>

        <transition
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
            <div class="box" v-if="show">
                <span @click="hide">X</span>
                <div class="imgs">

                    <div v-for="item in items" @click="$router.push({path:'/preview',params:item})">{{item}}</div>
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
        show:true,
        items:[1,2,3,4,5]

      }
    },
    components:{
      Header
    },
    methods:{
      hide(){
        this.show = !this.show
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
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
