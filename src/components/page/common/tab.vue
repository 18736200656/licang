<template>
    <div class="tab">
        <v-header></v-header>
        <router-view></router-view>
        <Foot></Foot>
    </div>
</template>

<script>
    import Header from './header'
    import Foot from './foot'
  export default {
    name: "tab",
    data(){
      return{

      }
    },
    components:{
      'v-header':Header,
      Foot:Foot
    }
  }
</script>

<style scoped>

</style>