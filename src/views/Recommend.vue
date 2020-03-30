<template>
  <div class="recommend">
    <scroll :top="82" :list="hotSongList" ref="scroll">
      <div class="scroll-wrapper">
        <!-- 轮播图组件 -->
        <my-swiper
          @img-load="scrollRefresh"
          :swiper_imgs="swiper_imgs"
          :swiper_options="swiper_options"
        ></my-swiper>
        <!-- 歌单列表组件 -->
        <song-sheet-list @img-load="scrollRefresh" :hotSongList="hotSongList"></song-sheet-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import MySwiper from '@/components/main/recommend/MySwiper'
import SongSheetList from '@/components/main/recommend/SongSheetList'
import Scroll from '@/components/common/Scroll'
export default {
  data() {
    return {
      // 轮播图片数组
      swiper_imgs: [],
      // 轮播控件配置
      swiper_options: {
        pagination: {
          el: '.swiper-pagination'
        },
        // 开启循环
        loop: true,
        // 开启自动轮播
        autoplay: true
      },
      // 火热歌单数组
      hotSongList: []
    }
  },
  methods: {
    // 获取轮播图数据
    async getSwiperList() {
      const { data: res } = await this.$axios.get('/banner')
      if (res.code !== 200) {
        // 请求错误
        return this.$message.error('请求失败！')
      }
      this.swiper_imgs = res.data.map(item => ({
        img: item.pic_info.url
      }))
      // console.log(this.swiper_imgs)
    },
    // 获取火热歌单数据
    async getHotSongList() {
      const { data: res } = await this.$axios.get('/songList/hot')
      if (res.code !== 200) {
        // 请求错误
        return this.$message.error('请求失败！')
      }
      this.hotSongList = res.data.list.map(item => ({
        id: item.dissid,
        img: item.imgurl,
        title: item.creator.name,
        info: item.dissname
      }))
      // console.log(this.hotSongList)
    },
    // 重新计算滚动区域的高度
    scrollRefresh() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    this.getSwiperList()
    this.getHotSongList()
  },
  components: {
    MySwiper,
    SongSheetList,
    Scroll
  }
}
</script>

<style></style>
