<template>
    <div class="main-section" :style="{ background: album.acf.background_color }">
        <Loading v-if="loading"></Loading>
        <section v-if="album && !loading">
            <div class="title space">
                <h1>{{album.title.rendered}}</h1>
                <h4>{{date}}</h4>
            </div>
            <div class="album-list space">
                <div class="image" v-for="(image, i) in album.acf.gallery.split(',')" :key="i">
                    <img :src="image" alt="" @click="showFullScreen = !showFullScreen">
                </div>
            </div>
            <div class="album" v-if="showFullScreen">
                <Slider :images="album.acf.gallery.split(',')" :album="true" @onClose="showFullScreen = false"></Slider>
            </div>
            <div class="content space">
                <div class="text" v-html="album.content.rendered"></div>
            </div>
            <div class="navigation space">
                <div>
                    <nuxt-link class="link" v-if="getPrev" :to="`/portfolio/${getPrev.id}`"><i class="fas fa-arrow-left"></i>Previous gallery</nuxt-link>
                </div>
                <div>
                    <nuxt-link class="link" v-if="getNext" :to="`/portfolio/${getNext.id}`">Next gallery<i class="fas fa-arrow-right"></i></nuxt-link>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import moment from 'moment'
    import { find } from 'lodash'
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
                showFullScreen: false,
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
        computed: {
            date() {
                return moment(this.album.date).format("MMM Do YY")
            },
            getPrev() {
                const [albums, album] = this.getAlbum();
                return albums[albums.indexOf(album) - 1]
            },
            getNext() {
                const [albums, album] = this.getAlbum();
                return albums[albums.indexOf(album) + 1]
            }
        },
        methods: {
            getAlbum() {
                const albums = this.$store.state.albums
                const album = find(albums, ['id', this.album.id])
                return [albums, album]
            },
            getItems () {
                axios.get(`https://cms.melikatursic.com/wp-json/wp/v2/albums/${this.$route.params.id}?_embed`).then((response) => {
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
            flex-direction: column;
            margin-bottom: 40px;
        }

        .album-list { 
            padding: .5vw;
            font-size: 0;
            display: -ms-flexbox;
            -ms-flex-wrap: wrap;
            -ms-flex-direction: column;
            -webkit-flex-flow: row wrap; 
            flex-flow: row wrap; 
            display: -webkit-box;
            display: flex;

            @media screen and (max-width: 400px) {
                padding: 0;
            }

            .image { 
                -webkit-box-flex: auto;
                -ms-flex: auto;
                flex: auto; 
                width: 400px; 
                margin: .5vw; 

                @media screen and (max-width: 400px) {
                    margin: 0;
                }

                img {
                    cursor: pointer;
                    width: 100%; 
                    height: auto; 
                }
            }
        }
        .album {
            position: fixed;
            z-index: 100;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }

        .navigation {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .link {
                width: 150px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-decoration: none;
                color: black;
                transition: ease .3s;

                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
</style>
