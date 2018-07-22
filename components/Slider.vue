<template>
  <div v-if="images" v-swiper:mySwiper="album ? swiperOptionAlbum : swiperOption" class="my-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="">
        <div v-if="!album" class="cover"></div>
      </div>
    </div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </div>
</template>

<script>
  export default {
    props: ['images', 'album'],
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 1000,
          autoHeight: true,
          effect: 'fade',
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionAlbum: {
          // slidesPerView: 3,
          slidesPerView: 'auto',
          spaceBetween: 30,
          mousewheel: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted() {},
  }
</script>

<style lang="scss" scoped>
  @import "../assets/styles/mixins";
  @import "../assets/styles/variables";

  .my-swiper {
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        width: auto;
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: $main-color;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
          height: 100vh;
        }

        img {
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }

  .cover {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  }
</style>