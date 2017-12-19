<template>
    <header>
      <slot name="small_icons"></slot>
      <slot name="big_icons"></slot>
      <slot name="template">-1/9</slot>|
      <slot name="wheather">多云</slot>
    </header>
</template>

<script>
    export default {
      name: "header",
      data () {
        return {

        }
      }
    }
</script>

<style scoped lang="less" type="text/less">
    header{
        height: 0.48rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        slot{
            font-size: .24rem;
            color: #ddd;
        }
    }
</style>
