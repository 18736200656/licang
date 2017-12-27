<template>
    <div class="header">
        <ul>
            <li @click="changeState">
                <slot name="big_icons" v-if="imgshow"><img src="../../../assets/list.png" alt="" class="small"></slot>
                <slot name="small_icons" v-else><img src="../../../assets/list.png" alt="" class="big"></slot>
            </li>
            <li><slot name="cityName"></slot></li>
            <li><slot name="template">-1/9 | 多云</slot></li>
        </ul>
    </div>

</template>_
<script>
    import {mapState} from 'vuex'
    export default {
      name: "header",
      data () {
        return {
          imgshow:true
        }
      },
      created(){
        this.weather()
      },
      methods:{
        changeState(){
          this.imgshow = !this.imgshow
          this.$store.dispatch('changeShow')
          // if(this.$store.state.show){
          //   this.$router.replace('userinfo')
          // }
        },
        weather(){
          let url = 'http://restapi.amap.com/v3/weather/weatherInfo';
          let options={
            key:'724957b94d7f9267ccac368f18c47010',
            city:'上海',
            extensions:'base',
            output:JSON
          }
          this.$http.get(url,options)
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
              console.log(err)
            })
        },


      },
      computed:{
        ...mapState(['show'])
      }
    }
</script>

<style scoped lang="less" type="text/less">
    .header{
        height:.48rem;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1000;
        background: #fff;
        ul{
            width: 100%;
            padding: 0 .2rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            li{
                margin-top: 0.1rem;
                font-size: .2rem;
                color: #999;
                img{
                    display: block;
                    height: 0.3rem;
                }
                .big{
                    width: 0.4rem;
                }
                .small{
                    width: 0.2rem;
                }

            }

        }
    }



</style>
