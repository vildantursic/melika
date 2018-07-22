<template>
  <section class="container">
    <Slider :images="images"></Slider>
    <Footer></Footer>
  </section>
</template>

<script>
import axios from 'axios'
import Slider from '~/components/Slider'
import Footer from '~/components/Footer'

export default {
  components: {
    Slider,
    Footer
  },
  data() {
    return {
      images: this.$store.state.images
    }
  },
  created () {
    this.getPage();
  },
  methods: {
    getPage () {
      axios.get('https://hotelsnjesko.ba/cms/wp-json/wp/v2/pages/38?_embed').then((response) => {
        if (JSON.stringify(this.images) != JSON.stringify(response.data.acf.gallery.split(',')))
          this.$store.commit('setImages', response.data.acf.gallery.split(','));
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

