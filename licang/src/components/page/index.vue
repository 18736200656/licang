<template>
    <div class="index">
        <Header></Header>
        <div class="main" v-for="item in listImgL">
            <div class="show">
                <img src="" alt="" class="img_main">
                <div class="img_list">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

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
          width:100%;
            .show{
                width:100%;
                margin-bottom: 0.2rem;
                background: #ddd;
                -moz-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
                -webkit-box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
                box-shadow:5px 5px 5px rgba(0,0,0,.2),1px -3px 5px rgba(0,0,0,.2),3px 0 3px rgba(0,0,0,.2) inset;
                img.img_main{
                    display: block;
                    width: 100%;
                    height: 2rem;
                    border: 1px solid #999;
                }
                .img_list{
                  width:100%;
                  overflow: hidden;
                  ul{
                    width: 300%;
                    background: #fff;
                    padding: 0.2rem 0;
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
                      height: 100%;

                    }
                  }

            }


            }

        }

    }
</style>
