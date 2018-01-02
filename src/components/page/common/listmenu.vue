<template>
    <el-collapse accordion>
        <el-collapse-item>
            <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-info"></i>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="身份">
            <el-collapse accordion>
                <el-collapse-item title="QQ">
                    <div>
                        <input type="text" maxlength="10" v-model="qq">
                        <i class="el-icon-edit" @click.stop="clearText($event)"></i>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="电话">
                    <div>
                        <input type="text" maxlength="11" v-model="电话">
                        <i class="el-icon-edit" @click.stop="clearText($event)"></i>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="介绍">
                </el-collapse-item>
                <el-collapse-item title="经验">
                </el-collapse-item>
                <el-collapse-item title="领域">
                </el-collapse-item>
                <el-collapse-item title="区域">
                </el-collapse-item>
            </el-collapse>
        </el-collapse-item>
        <el-collapse-item title="关注">
            <Concern></Concern>
        </el-collapse-item>
        <el-collapse-item title="收藏">
            <Collection></Collection>
        </el-collapse-item>
        <el-collapse-item title="客服">
            <div>021-2251225</div>
        </el-collapse-item>
        <el-collapse-item title="设置">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
  import Concern from './concern'
  import Collection from '../user/collection'
  export default {
    name: "listmenu",
    components:{
      Concern,
      Collection
    }
  }
</script>

<style scoped type="text/less" lang="less">
    .el-collapse-item__header{
        text-align: left;
        margin-left: 0.2rem;
    }
</style>