<template>
    <div class="foot">
        <ul>
            <router-link to="/index" tag="li">w</router-link>
            <router-link to="/c" tag="li">c</router-link>
            <router-link to="/f" tag="li">f</router-link>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "foot",
    data(){
      return{

      }
    },

  }
</script>

<style scoped lang="less" type="text/less">
    .foot{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 0.6rem;
        background: rgba(32,39,43,1);
        width: 100%;
        z-index: 99;
        ul{
            height: 100%;
            li{
                list-style: none;
                float: left;
                width: 33.3%;
                text-align: center;
                color: #90FFFF;
                font:0.24rem/0.6rem '';
            }
            .router-link-active{
                color: #fff;
            }
        }
    }
</style>