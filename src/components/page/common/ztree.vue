<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
    import Concern from './concern'
    import Collection from '../user/collection'
  export default {
    name: "ztree",
    data(){
      return{
        data:[
          {
            label:'身份',
            children:[
              {
                label:'QQ',
                children:[
                  {label:'<input type="text" v-model="qq" maxlength="10"/> '}
                ]
              },
              {
                label:'电话',
                children:[
                  {label:'<input type="text" v-model="phone" maxlength="11"/> '}
                ]
              },
              {
                label:'介绍',
                children:[

                ]
              },
              {
                label:'经验',
                children:[

                ]
              },
              {
                label:'领域',
                children:[

                ]
              },
              {
                label:'区域',
                children:[

                ]
              },

            ]
          },
          {
            label:'关注',
              children:[
                {
                  label:Concern,
                },
              ]
          },
          {
            label:'收藏',
            children:[
              {label:Collection},
            ]
          },
          {
            label:'客服',
            children:[
              {label:'021-5521552',
              }
            ]
          },
          {
            label:'设置',
            children:[
              {label:'设置000',
              }
            ]
          },
        ],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
      }
    },
    methods:{
      handelNodeClick(data){
        console.log(data);
      }
    },
    components: {
      Concern,
      Collection
    }
  }
</script>

<style scoped>

</style>