<i18n>
  {
    "en": {
      "source": "Source: ",
      "view": "Details"
    },
    "zh": {
      "source": "信息来源：",
      "view": "查看详情"
    }
  }
</i18n>
<template>
  <div class="home">
    <v-img
      :src="require('@/assets/logo/header.png')"
      aspect-ratio="2"
      max-height="220px"
      min-width="440px"
      max-width="640px"
      contain
      class="mx-auto"
    />
    <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
      <el-tab-pane label="全省动态" name="first"></el-tab-pane>
      <el-tab-pane label="各市详情" name="second"></el-tab-pane>
    </el-tabs>
    <div v-if="this.activeName === 'second' ">
      <el-row style="hight: 40px;">
        <el-col :span="24">
        <el-collapse>
        <el-collapse-item title="城市列表" >
          <el-button class="button-show" v-for="(item,i) in list" :key="i" type="primary" size="mini" round>{{item.name}}</el-button>
  </el-collapse-item>
  </el-collapse>
        </el-col>
      </el-row>
      <el-card class="box-card" > 
        <div>   
          <div class="title">
            <span>实时疫情数据</span>
            <p>按确诊人数从高到低排列 </p>
            </div>  

              <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="区县名称"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="确诊"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="疑似">
    </el-table-column>
        <el-table-column
      prop="address"
      label="治愈">
    </el-table-column>
        <el-table-column
      prop="address"
      label="死亡">
    </el-table-column>
  </el-table>  
           </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Province",
  components: {},
  data() {
    return {
      activeName: "second",
      list:[
        {
            name:"济南",
            id:"1"
        },
                {
            name:"青岛",
            id:"2"
        },
                {
            name:"淄博",
            id:"3"
        },
                {
            name:"枣庄",
            id:"4"
        },
                {
            name:"东营",
            id:"5"
        },
                {
            name:"烟台",
            id:"6"
        },
                {
            name:"潍坊",
            id:"7"
        },

                {
            name:"济宁",
            id:"8"
        },
        
                {
            name:"泰安",
            id:"9"
        },
        
                {
            name:"威海",
            id:"10"
        },
        
                {
            name:"日照",
            id:"11"
        },
        
                {
            name:"莱芜",
            id:"12"
        },

        
                {
            name:"临沂",
            id:"13"
        },
        
                {
            name:"德州",
            id:"14"
        },
        
                {
            name:"聊城",
            id:"15"
        },

        
                {
            name:"滨州",
            id:"16"
        },
                        {
            name:"菏泽",
            id:"17"
        },

      ]

      

  }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.home{
  /* background-color: azure； */
}
.button-show{
  margin-right: 2px;
  margin-top: 5px;
  margin-bottom: 2px;
}
.title{
  margin-top: -15px;
}
.title p {
  font-size: 12px;
    float: right;
    color: #9EA0A5;
}
.title span {
  font-size: 18px;
  font-weight: 600
}
</style>
