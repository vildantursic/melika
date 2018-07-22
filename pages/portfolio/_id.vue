<template>
    <div class="main-section" :style="{ background: album.acf.background_color }">
        <Loading v-if="loading"></Loading>
        <section v-if="album && !loading">
            <div class="title space">
                <h1>{{album.title.rendered}}</h1>
            </div>
            <div class="album">
                <Slider :images="album.acf.gallery.split(',')" :album="true"></Slider>
            </div>
            <div class="content space">
                <div class="text" v-html="album.content.rendered"></div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
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
                album: {
                    title: {
                        rendered: ''
                    },
                    content: {
                        rendered: ''
                    },
                    acf: {
                        gallery: ''
                    }
                }
            }
        },
        created() {
            this.getItems();
        },
        methods: {
            getItems () {
                axios.get(`https://hotelsnjesko.ba/cms/wp-json/wp/v2/albums/${this.$route.params.id}?_embed`).then((response) => {
                    this.album = response.data;
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-section {

        section {
            display: block;
            width: 100%;
        }

        .title {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .album {
            height: 600px;

            @media (max-width: 768px) {
                height: auto;
            }
        }
    }
</style>
