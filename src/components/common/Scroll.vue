<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 初始化滚动
    initScroll() {
      this.$refs.wrapper.style.top = this.top + 'px'
      // this.$refs.wrapper.style.height = this.$refs.wrapper.style.height + this.top + 'px'
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    this.initScroll()
  },
  watch: {
    // 检测list数据发生改变就重新计算滚动区域的高度
    list() {
      this.$nextTick(() => {
        this.refresh()
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
