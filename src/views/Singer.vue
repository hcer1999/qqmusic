<template>
  <div class="singer">
    <scroll :top="82" :list="singerList" ref="scroll">
      <div>
        <singer-category
          @toogleCategory="toogleCategory"
          :singerCategory="singerCategoryList"
        ></singer-category>
        <singer-list @img-load="scrollRefresh" :singerList="singerList"></singer-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/Scroll'
import SingerCategory from '@/components/main/singer/SingerCategory'
import SingerList from '@/components/main/singer/SingerList'
export default {
  data() {
    return {
      // 所有分类的数据
      singerCategoryList: {},
      // 获取歌手列表的时候提交的参数
      getInfo: {
        sexId: -100,
        areaId: -100,
        genre: -100,
        index: -100,
        pageSize: 30,
        page: 0
      },
      // 当前分类下的歌手数据
      singerList: []
    }
  },
  components: {
    // 歌手分类
    SingerCategory,
    // 歌手列表
    SingerList,
    Scroll
  },
  methods: {
    // 获取歌手分类列表
    async getSingerCategoryList() {
      const { data: res } = await this.$axios.get('/artist/category')
      if (res.code !== 200) {
        // 请求错误
        return this.$message.error('请求失败！')
      }
      this.singerCategoryList = {
        area: res.data.area,
        sex: res.data.sex,
        genre: res.data.genre
      }
      // 然后再根据分类去获取歌手列表
      this.getSingerList()
      // console.log(this.singerCategoryList)
    },
    // 子组件分类列表被切换函数
    toogleCategory(activeInfo) {
      this.getInfo.sexId = this.singerCategoryList.sex[activeInfo.sex].id
      this.getInfo.areaId = this.singerCategoryList.area[activeInfo.area].id
      this.getInfo.genre = this.singerCategoryList.genre[activeInfo.genre].id
      this.getSingerList()
    },
    // 根据分类获取歌手列表
    async getSingerList() {
      const { data: res } = await this.$axios.get('/artist/list', {
        params: this.getInfo
      })
      if (res.code !== 200) {
        return this.$message.error('请求失败！')
      }
      this.singerList = res.data
      // console.log(res)
    },
    // 重新计算滚动区域的高度
    scrollRefresh() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    this.getSingerCategoryList()
  }
}
</script>

<style></style>
