<template>
    <div class="main-section" :style="{ background: post.acf.background_color }">
        <Loading v-if="loading"></Loading>
        <section v-if="post && !loading">
            <div class="post space" v-if="post._embedded">
                <img v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url" alt="">
                <img v-if="!post._embedded['wp:featuredmedia']" :src="'/images/background.png'" alt="">
                <div class="title">
                    <h1>{{post.title.rendered}}</h1>
                </div>
            </div>
            <div class="content space">
                <div class="text" v-html="post.content.rendered"></div>
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
                post: {
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
                axios.get(`https://hotelsnjesko.ba/cms/wp-json/wp/v2/posts/${this.$route.params.id}?_embed`).then((response) => {
                    this.post = response.data;
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

            .post {
                position: relative;
                height: 450px;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 100%;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 60px;
                    z-index: 2;
                    background: rgba(255, 255, 255, 0.7);

                    h1 {
                        padding: 0 20px;
                    }
                }
            }
        }
    }
</style>
