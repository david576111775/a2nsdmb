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
              :src="require('@/assets/logo/a2nlogo.jpg')"
              aspect-ratio="2"
              max-height="128px"
              min-width="64px"
              max-width="256px"
              contain
              class="mx-auto"
            />
            在这画图
            
  </div>
</template>

<script>

export default {
  name: 'Province',
  components: {
  }
}
</script>
