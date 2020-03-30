<template>
  <div class="header">
    <!-- 标题区域 -->
    <div class="title text-primary text-lg text-weight-7 text-center pt-2">
      {{ title }}
    </div>
    <!-- 头部导航区域 -->
    <div class="nav-list">
      <ul class="d-flex jc-around py-3 text-md text-gray2">
        <li
          v-for="item of navList"
          :key="item.name"
          :class="{ 'nav-active': isActive(item.path) }"
          @click="navClick(item.path)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'QQMusic'
    }
  },
  data() {
    return {
      navList: [
        { path: '/recommend', name: '推荐' },
        { path: '/singer', name: '歌手' },
        { path: '/rank', name: '排行' },
        { path: '/search', name: '搜索' }
      ]
    }
  },
  methods: {
    // 导航栏被点击
    navClick(path) {
      this.$emit('nav-click', path)
    },
    // 返回导航栏选中情况
    isActive(path) {
      if (path === this.$route.path) {
        return true
      }
      return false
    }
  },
  computed: {}
}
</script>

<style></style>
