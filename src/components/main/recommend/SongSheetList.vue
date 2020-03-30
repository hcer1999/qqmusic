<template>
  <div class="songsheetlist">
    <ul class="mt-2 ml-4">
      <li v-for="item of hotSongList" :key="item.id" class="mb-3 d-flex">
        <img @load="imgLoad" :src="item.img" width="60" height="60" />
        <div class="d-flex flex-wrap ml-2 ai-center">
          <span class="w-100">{{ item.title }}</span>
          <span class="text-gray2">{{ item.info }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hotSongList: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 图片加载完毕之后
    imgLoad() {
      this.$emit('img-load')
    }
  }
}
</script>

<style></style>
