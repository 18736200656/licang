<template>
    <div class="collection">
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <img :src="showImg" alt="" class="show_img">
                <div class="author">
                    {{item}}
                    <img :src="defaultImg" alt="">
                    <div class="collUser">
                        <h3>长衣服呢过</h3>
                        <p>fskadfa </p>
                    </div>
                </div>
                <div class="remove">
                    <span>X</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  import{imgBaseUrl} from '../../config/env'
  export default {
    name: "collection",
    data(){
      return{
        arr:[3],
        defaultImg:imgBaseUrl,
        showImg:'./../../../assets/logo.png'
      }
    },
    components:{

    }
  }
</script>

<style scoped lang="less" type="text/less">
    ul{
        height: 2.5rem;
        li{
            overflow: hidden;
            width: 2rem;
            height: 100%;
            float: left;
            margin-right: 0.2rem;
            border: 1px solid #999;
            position: relative;
            .show_img{
                display: block;
                height: 100%;
                width: 100%;
            }
            .author{
                width: 100%;
                height: 1rem;
                background: #fff;
                padding: 0.2rem 0 0.2rem 0.2rem;
                border: 1px solid #ddd;
                box-shadow: 0 2px 4xp #ddd;
                position: absolute;
                left: 0;
                bottom: -1rem;
                transition: all 0.5s;
                img{
                    width: 0.5rem;
                    height: 0.5em;
                    border-radius: 50%;
                    float: left;

                }
                .collUser{
                    margin-left: 0.1rem;
                    float: left;
                    height: .5rem;
                    text-align: left;
                    h3{font:0.2rem/0.3rem '';
                        font-weight: bold;}
                    p{font:0.16rem/0.2rem '';color:#999;}
                }
            }
            .remove{
                position: absolute;
                left: 0;
                top: -2.5rem;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                transition: all 0.5s;
                span{
                    display: block;
                    width: 0.5rem;
                    height: 0.5rem;
                    border: 1px solid #999;
                    border-radius: 50%;
                    text-align: center;
                    font: 0.25rem/0.5rem '';
                    color: #000;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);

                }
            }

        }
        &:hover .author{
            bottom: 0;
        }
        &:hover .remove{
            top: 0;
        }
    }
</style>