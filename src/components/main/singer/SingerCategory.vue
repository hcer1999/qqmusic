<template>
  <div class="singer_category">
    <div class="px-3" v-for="(item, index) of singerCategory" :key="index">
      <ul class="d-flex flex-wrap text-gray2 text-xs">
        <li
          :class="{ 'singer-cative': activeIndex[index] === index1 }"
          class="p-1 m-2"
          v-for="(item1, index1) of item"
          :key="item1.id"
          @click="categoryClick(index, index1)"
        >
          {{ item1.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 所有的歌手分类数据
    singerCategory: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // 保存每项分类当前选中的项目
      activeIndex: {
        sex: 0,
        genre: 0,
        area: 0
      }
    }
  },
  methods: {
    // 当切换分类
    categoryClick(index, index1) {
      this.activeIndex[index] = index1
      this.$emit('toogleCategory', this.activeIndex)
    }
  }
}
</script>

<style></style>
