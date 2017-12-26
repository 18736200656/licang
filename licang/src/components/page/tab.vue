<template>
    <div class="tab">
        <v-header></v-header>
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>

<script>
    import Header from './common/header'
    import Foot from './common/foot'
  export default {
    name: "tab",
    data(){
      return{

      }
    },
    components:{
      'v-header':Header,
      Foot
    }
  }
</script>

<style scoped>

</style>