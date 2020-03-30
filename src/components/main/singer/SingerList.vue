<template>
  <div class="singer">
    <ul class="px-4 pt-3">
      <li
        @click="singerClick(item)"
        class="d-flex ai-center pb-3"
        v-for="item of singerList"
        :key="item.singer_id"
      >
        <img
          @load="imgLoad"
          class="avatar"
          :src="item.singer_pic.replace('webp', 'jpg')"
          width="60"
        />
        <span class="text-gray2 ml-3">{{ item.singer_name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 当前分类下的歌手数据
    singerList: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 点击某个歌手
    singerClick(item) {
      console.log(item)
    },
    // 每张图片加载完毕之后刷新一次滚动区域高度
    imgLoad() {
      this.$emit('img-load')
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}
</style>
