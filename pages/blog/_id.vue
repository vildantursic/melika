<template>
    <div class="main-section" :style="{ background: post.acf.background_color }">
        <Loading v-if="loading"></Loading>
        <section v-if="post && !loading">
            <div class="post space" v-if="post._embedded">
                <img v-if="post._embedded['wp:featuredmedia']" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url" alt="">
                <img v-if="!post._embedded['wp:featuredmedia']" :src="'/images/background.png'" alt="">
                <div class="title">
                    <h1>{{post.title.rendered}}</h1>
                    <h4>{{date}}</h4>
                </div>
            </div>
            <div class="content space">
                <div class="text" v-html="post.content.rendered"></div>
            </div>
            <div class="recent space">
                <h1>RECENT POSTS</h1>
                <div class="posts">
                    <Post v-if="postsRec" v-for="(postRec, i) of postsRec.slice(0, 3)" :key="i" :item="postRec"></Post>
                </div>
            </div>
            <div class="navigation space">
                <div>
                    <nuxt-link class="link" v-if="getPrev" :to="`/blog/${getPrev.id}`"><i class="fas fa-arrow-left"></i>Previous gallery</nuxt-link>
                </div>
                <div>
                    <nuxt-link class="link" v-if="getNext" :to="`/blog/${getNext.id}`">Next gallery<i class="fas fa-arrow-right"></i></nuxt-link>
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
    import Post from '~/components/Post'

    export default {
        components: {
            Loading,
            Slider,
            Post,
            Footer
        },
        data() {
            return {
                loading: true,
                postsRec: this.$store.state.posts,
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
        computed: {
            date() {
                return moment(this.post.date).format("MMM Do YY")
            },
            getPrev() {
                const [posts, post] = this.getPost();
                return posts[posts.indexOf(post) - 1]
            },
            getNext() {
                const [posts, post] = this.getPost();
                return posts[posts.indexOf(post) + 1]
            }
        },
        methods: {
            getPost() {
                const posts = this.$store.state.posts
                const post = find(posts, ['id', this.post.id])
                return [posts, post]
            },
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
    @import "../../assets/styles/mixins";

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

                    @media (max-width: 768px) {
                        width: auto;
                    }
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: auto;
                    z-index: 2;
                    background: rgba(255, 255, 255, 0.7);

                    h1 {
                        padding: 0 20px;
                    }
                    h4 {
                        padding: 0 20px;
                    }
                }
            }
            .recent {
                .posts {
                    @include grid-items(25px, 25px, 3, 2);
                }
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
    }
</style>
