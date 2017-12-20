<template>
    <div class="index">
        <Header></Header>
        <button @click="show = !show">切换</button>
        <transition >
            <div class="box" v-if="show">
                <div class="main" v-for="item in listImgL">
                    <img src="" alt="" class="img_main">
                    <ul class="img_list" ref="ulTag">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    import Header from './common/header/header'
    export default {
        name: "index",
        data(){
          return{
            listImgL:[1,2],
            show:true
          }
        },
       created(){
         //console.log(this)
         this.$nextTick(()=>{
           //console.log(this)
           let ul = this.$refs.ulTag;
           let lis = document.getElementsByTagName('li');
           for(var i=0; i<lis.length;i++){
             ul.onmousemove = function () {
               ul.style.left = lis[0].offsetWidth * i + 'rem'
             }
           }
           // ul.onclick = function () {
           //   this.style.left = -1.2 + 'rem'
           //   console.log(this)
           // }
         })
       },
       mounted(){


       },
        components:{
          Header
        },
        methods:{

        }
    }
</script>

<style scoped lang="less" type="text/less">
    .index{
        box-sizing: border-box;
        padding:0 .2rem;
        .main{
            position: relative;
            width:100%;
            height: 3.4rem;
            overflow: hidden;
            margin-bottom: 0.2rem;
            background: #ddd;
            -moz-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            -webkit-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
            .img_main{
                display: block;
                width: 100%;
                height: 2rem;
                border: 1px solid #999;
            }
            .img_list{
                width: 200%;
                background: #fff;
                padding: 0.2rem 0;
                height: 1.4rem;
                border: 1px solid #ddd;
                position: absolute;
                top: 2rem;
                li{
                    float: left;
                    margin-left: 0.2rem;
                  background: #ccc;
                  -webkit-border-radius: 4px;
                  -moz-border-radius: 4px;
                  border-radius: 4px;
                  width: 1.2rem;
                  height: 100%;
                }

            }

        }

    }
</style>
