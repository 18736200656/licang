<template>
    <div>
        <ul>
            <li><slot name="small_icons"><i class="el-icon-bottom"></i></slot></li>
            <li><slot name="big_icons">标题</slot></li>
            <li><slot name="template">-1/9</slot>|</li>
            <li><slot name="wheather">多云</slot></li>
        </ul>
    </div>
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
    ul{
        padding: 0 .2rem;
        height:.48rem;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            font-size: .24rem;
            color: #999;
        }

    }



</style>
