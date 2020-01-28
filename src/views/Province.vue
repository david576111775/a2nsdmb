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
          <el-button v-for="(item,i) in list" :key="i" type="primary" round>{{item}}</el-button>
        </el-col>
      </el-row>
      <el-card class="box-card" shadow="always" > 
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
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
      list: ["青岛", "济南", "济南", "济南"]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
