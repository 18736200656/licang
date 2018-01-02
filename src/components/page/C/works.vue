<template>
    <div class="works" v-if="showList">
        <span @click="closeDialog" class="close">x</span>
        <div class="works_list" v-for="item in arr">
            <div class="work_title">
               <div class="work_title_tit">『 环境与资源 』</div>
               <div class="work_title_pri">获得法国2002年论述奖</div>
            </div>
            <ul>
                <li v-for="(item,index) in imgList">
                    <img :src="item" alt="" @click="bigImg($event)">
                </li>
            </ul>
        </div>
        <Preview :imgSrc="imgSrc" v-if="bigImgShow"></Preview>
    </div>

</template>

<script>
  import Preview from '../common/preview'
  import {mapState} from 'vuex'
  export default {
    name: "works",
    data(){
      return{
        showList:true,
        imgSrc:'',
        arr:[1,2,3],
        imgList:[
          '../../../../../static/img/1.jpg',
          '../../../../../static/img/2.jpg',
          '../../../../../static/img/3.jpg',
          '../../../../../static/img/4.jpg',
          '../../../../../static/img/5.jpg',
          '../../../../../static/img/6.jpg',
          '../../../../../static/img/7.jpg',
          '../../../../../static/img/8.jpg',
          '../../../../../static/img/9.jpg',
          '../../../../../static/img/10.jpg',
          '../../../../../static/img/11.jpg',
          '../../../../../static/img/12.jpg',
        ]
      }
    },
    methods:{
      bigImg(e){
        setTimeout(()=>{
          this.$store.dispatch('priewBigImg')
        },300)
        this.imgSrc = e.currentTarget.src
      },
      closeDialog(){
        this.showList = false
        this.$router.push('content')
      }
    },
    computed:{
        ...mapState(['bigImgShow'])
    },
    components:{
      Preview
    }
  }
</script>

<style scoped lang="less" type="text/less">
    .works{
        margin: 0.15rem;
        text-align: left;
        .close{
            display: block;
            padding-left: 0.1rem;
            font: 0.2rem/0.3rem '';
            color: #000;
        }
        .works_list{
            margin-top: 0.15rem;
            margin-bottom: 0.2rem;
            .work_title{
                padding: 0 0.1rem;
                width: 100%;
                display: flex;
                border-bottom: 1px solid #000;
                justify-content: space-between;
                align-content: center;
                .work_title_tit{
                    font: 0.14rem/0.2rem '';
                    color: #000;
                }
                .work_title_pri{
                    font: 0.12rem/0.2rem '';
                    color: #999;
                }
            }
            ul{
                width: 103%;
                margin-bottom: 0.2rem;
                overflow: hidden;
                li{
                    float: left;
                    width: 1.05rem;
                    height: 1.05rem;
                    margin-right: 0.13rem;
                    margin-top: 0.15rem;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

    }
</style>