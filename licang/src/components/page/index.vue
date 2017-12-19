<template>
    <div class="index">
        <Header></Header>
        <div class="main" v-for="item in listImgL">
            <div class="show">
                <img src="" alt="" class="img_main">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import Header from './common/header/header'
    export default {
        name: "index",
        data(){
          return{
            listImgL:[1,2]
          }
        },
        components:{
          Header
        }
    }
</script>

<style scoped lang="less" type="text/less">
    .index{
        box-sizing: border-box;
        padding:0 .2rem;
        .main{
            padding-top: .1rem;
            .show{
                margin-bottom: 0.2rem;
                background: #ddd;

                box-shadow: 0px 0px 6px #ddd;
                img.img_main{
                    display: block;
                    width: 100%;
                    height: 2rem;
                    border: 1px solid #999;
                }
                ul{
                    background: #fff;
                    padding: 0.2rem 0;
                    overflow: hidden;
                    -width: 300%;
                    height: 1.4rem;
                    border: 1px solid #ddd;
                    li{
                        background: #ccc;
                        float: left;
                        border: 1px solid #ccc;
                        -webkit-border-radius: 4px;
                        -moz-border-radius: 4px;
                        border-radius: 4px;
                        margin-left: 0.2rem;
                        width: 1.2rem;
                        height: 1rem;

                    }
                }

            }

        }

    }
</style>
