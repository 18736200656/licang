<template>
    <div class="header">
        <ul>
            <li @click="changeState">
                <slot name="big_icons" v-if="imgshow"><img src="../../../assets/list.png" alt="" class="big"></slot>
                <slot name="small_icons" v-else><img src="../../../assets/list.png" alt="" class="small"></slot>
            </li>
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
      methods:{
        changeState(){
          this.imgshow = !this.imgshow
          this.$store.dispatch('changeShow')
          // if(this.$store.state.show){
          //   this.$router.replace('userinfo')
          // }
        }
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
