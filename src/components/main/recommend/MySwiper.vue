<template>
  <div class="my-swiper">
    <swiper ref="mySwiper" :options="swiper_options" v-if="swiper_imgs.length">
      <swiper-slide v-for="(item, index) of swiper_imgs" :key="index">
        <img :src="item.img" class="w-100" @load="imgLoad" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  props: {
    swiper_imgs: {
      type: Array,
      required: true
    },
    swiper_options: {
      type: Object,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    imgLoad() {
      this.$emit('img-load')
    }
  },
  directives: {
    swiper: directive
  }
}
</script>

<style></style>
