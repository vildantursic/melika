<template>
  <div class="layout">
    <!-- <link defer async rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/solid.css" integrity="sha384-S2gVFTIn1tJ/Plf+40+RRAxBCiBU5oAMFUJxTXT3vOlxtXm7MGjVj62mDpbujs4C" crossorigin="anonymous">
    <link defer async rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/brands.css" integrity="sha384-SYNjKRRe+vDW0KSn/LrkhG++hqCLJg9ev1jIh8CHKuEA132pgAz+WofmKAhPpTR7" crossorigin="anonymous">
    <link defer async rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/fontawesome.css" integrity="sha384-0b7ERybvrT5RZyD80ojw6KNKz6nIAlgOKXIcJ0CV7A6Iia8yt2y1bBfLBOwoc9fQ" crossorigin="anonymous"> -->

    <Header></Header>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'

  if (process.browser) {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }


  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
.layout {
  display: block;
}
</style>

