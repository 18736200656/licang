<template>
    <div>
        <ul>
            <transition name="fade" mode="in-out">
              <li><slot name="small_icons"><div class="anniu" @click ="change"></div></slot></li>
            </transition>
            <li><slot name="template">-1/9</slot>|<slot name="wheather">多云</slot></li>
        </ul>
    </div>
</template>
<script>
    export default {
      name: "header",
      data () {
        return {
        }
      },
      props:['show'],
      methods:{
       change(){
         this.show = !this.show
       }
      }
    }
</script>

<style scoped lang="less" type="text/less">
    div{
        position: fixed;
        padding: 0 0.2rem;
        left: 0;
        top: 0;
        height:.48rem;
        width: 100%;
        ul{
          display: flex;
          justify-content: space-between;
          li{
              font-size: .24rem;
              color: #999;
            .anniu{
              background: #ddd;
              width:.3rem;
              height: 0.3rem;
            }
          }
        }
    }



</style>
