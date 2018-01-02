<template>
    <div class="content">
        <header>
            <ul>
                <li @click="$router.push('c')"><</li>
                <li @click="$router.push('works')">
                    <img src="../../../assets/image/liebiao.png" alt="">
                </li>
            </ul>
        </header>
        <img src="../../../assets/1.jpg" alt="" class="navimg">
        <div class="container">
            <div class="video_box">
                <h3 class="video_title">一个空间，一个建筑，它所诠释出来的语言，可以代表一个人的品质。</h3>
                <video width="100%" height="200">
                    您上传的视频格式不支持 ||您的浏览器不支持 HTML5 video 标签。
                    <source src="../../../assets/WeChat.mp4" type="video/mp4"/>
                    <source src="http://www.youname.com/images/first.ogv" type="video/ogv"/>
                    <source src="http://www.youname.com/images/first.ogg" type="video/ogg" />
                </video>
                <div class="video_info">
                    <h3 class="video_name">
                        朱玉晓
                    </h3>
                    <p class="video_intro">
                        著名独立室内建筑设计师，正觉国际创始人
                    </p>
                    <p class="video_intro">
                       出生日期：1974-5-2，星座：金牛座，身高：175 CM。
                    </p>
                </div>
                <div class="line"></div>
                <div class="author_bg">
                    <h4 class="author_title">朱玉晓先生设计领域从业背景概述</h4>
                    <ul>
                        <li>著名独立室内建筑设计师朱玉晓为亚洲当今设计业界的独特人物，为人不急挑剔，作品多远武昌。
                            跨足建筑、工业设计、产品设计、空间设计，影视作品，被誉为“具有时代性的变化拍设计鬼才”！
                            其经验、破旧立新又极具视觉震撼力的作品。一再打破现有的设计模式，衍生出无线的变形空间。倡导“观念决定一切”
                        </li>
                        <li>-曾值巴黎 冠以“洋学” 静在不泄气种风情，随感“国学”乃至我真爱，回府！</li>
                        <li>-回复后许因技术超前五百年，无人共勉，刀枪棍棒折腾数年吴大成，遂放下刀;；</li>
                        <li>-离地车企：独立设计师！岁运气爆发；</li>
                        <li>-凤凰卫视专访 旅游卫视专访 亚太拿奖N多杂志连至今；</li>
                        <li>-出演杨坤MTV 级诸多名流豪宅披靡所向</li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="self_prize">
                    <img src="../../../assets/2.jpg" alt="" class="slef_img">
                    <h4 class="self_title">
                        朱玉晓个人荣誉概述
                    </h4>
                    <p class="self_pri">获得法国2002年《环境与资源》论述奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">获得中国2006年度《时尚》年度最佳设计奖</p>
                    <p class="self_pri">IAI AWARDS 2012 公共优秀空间奖</p>
                    <p class="self_pri">IAI AWARDS 2012 公共优秀空间奖</p>
                    <p class="self_pri">IFI APDC 12/13亚太室内设计精英邀请赛会所空间组大奖</p>
                    <p class="self_pri">IFI APDC 12/13亚太室内设计精英邀请赛会所空间组大奖</p>
                    <p class="self_pri">IFI APDC 12/13亚太室内设计精英邀请赛会所空间组大奖</p>
                </div>
                <img src="../../../assets/3.jpg" alt="" class="prize_img">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "content",
    data(){
      return{

      }
    },
    created(){
      this.getData();
    },
    mounted(){
      let video = document.getElementsByTagName('video')[0]
      video.onclick = function () {
        video.setAttribute('controls',true)
        console.log(1)
      }
    },
    methods:{
      getData(){
        let url ='../../../assets/getData.json';
        this.$http.get(url).then(res=>{
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped lang="less" type="text/less">
    header{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        height: 0.4rem;
        ul{
            margin: 0.15rem;
            li:nth-of-type(1){
                float: left;
                font-size: 0.18rem;
                color: #fff;
            }
            li:nth-of-type(2){
                float: right;
                img{
                    display: block;
                    width: 0.04rem;
                    height: 0.18rem;
                }
            }
        }
    }
    .navimg{
        width: 100%;
        height: 3rem;
    }
    .container{
        padding: 0.1rem 0.2rem ;
        .video_box{

            .video_title{
                font-size: 0.18rem;
                line-height: 0.26rem;
                color: #000;
                font-weight: bolder;
            }
            video{
                margin: 0.2rem 0;
            }
            .video_info{
                text-align: left;

                .video_name{
                    font: 0.18rem/0.26rem '';
                    font-weight: bolder;
                    color: #000;

                }
                .video_intro{
                    font: 0.14rem/0.26rem '';
                }
            }
        }
        .line{
            margin: 0.2rem 0;
            height: 0.01rem;
            background: #999;
        }
        .author_bg{
            text-align: left;
            color: #000;
            .author_title{
                font:0.16rem/0.2rem '';

                font-weight: bolder;
            }
            ul{
                margin-top: 0.2rem;
                li{
                    list-style: none;
                    font: 0.13rem/0.2rem '';

                }
            }
        }
        .self_prize{
            text-align: left;
            color: #000;
            .slef_img{
                width: 100%;
                height: 2rem;
                margin: 0.1rem 0;
            }
            .self_title{
                font: 0.18rem/0.26rem '';
                font-weight: bolder;
                margin-bottom: 0.1rem;
            }
            .self_pri{
                font-size: 0.13rem;
                line-height: 0.4rem;

            }
        }
        .prize_img{
            width: 100%;
            height: 2.5rem;
            margin: 0.2rem 0;
        }

    }
</style>