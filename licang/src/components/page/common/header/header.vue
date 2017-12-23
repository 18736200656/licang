<template>
    <div class="header">
        <ul>
            <li @click ="change">
                <slot class="small_icons" v-if="show">笑笑</slot >
                <slot class="small_icons" v-else>哈哈</slot >
            </li>
            <li><slot name="template">-1/9 | 多云</slot></li>
        </ul>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      name: "header",
      data () {
        return {
        }
      },
      methods:{
       change(){
         console.log(1)
         this.$store.dispatch('changeState')
       }
      },
      computed:{
        ...mapState(['show'])
      }
    }
</script>

<style scoped lang="less" type="text/less">
    .header{
        position: fixed;
        left: 0;
        top: 0;
        height:.48rem;
        width:100%;
        ul{
          margin:0 0.2rem;
          display: flex;
          justify-content: space-between;
          li{
              font: .24rem/0.48rem '';
              color: #000;
          }
        }
    }



</style>
