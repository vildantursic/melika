<template>
  <section class="container">
    <Loading v-show="loading"></Loading>
    <Slider v-show="!loading" :images="images"></Slider>
    <Footer></Footer>
  </section>
</template>

<script>
import axios from 'axios'
import { isEqual } from 'lodash'
import Loading from '~/components/Loading'
import Slider from '~/components/Slider'
import Footer from '~/components/Footer'

export default {
  components: {
    Loading,
    Slider,
    Footer
  },
  data() {
    return {
      loading: true,
    }
  },
  created () {
    this.getPage();
  },
  computed: {
      images() {
          return this.$store.state.images
      }
  },
  methods: {
    getPage () {
      if (this.images.length !== 0)
        this.loading = false;

      axios.get('https://cms.melikatursic.com/wp-json/wp/v2/pages/38?_embed').then((response) => {
        if (!isEqual(this.images, response.data.acf.gallery.split(','))) {
          this.$store.commit('setImages', response.data.acf.gallery.split(','));
        }
        this.loading = false;
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

a {
  color: white !important;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  color: white;
}
</style>

