<template>
  <div class="main">
    <main-header title="Hcer Music" @nav-click="toPath"></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'
export default {
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  },
  components: {
    MainHeader
  }
}
</script>

<style></style>
