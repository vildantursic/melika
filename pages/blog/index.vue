<template>
    <div class="main-section">
        <Loading v-show="loading"></Loading>
        <section v-show="!loading">
            <div class="posts space" >
                <Post v-if="post" v-for="(post, i) of posts" :key="i" :item="post"></Post>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import { isEqual } from 'lodash'
    import Loading from '~/components/Loading'
    import Post from '~/components/Post'
    import Footer from '~/components/Footer'

    export default {
        components: {
            Loading,
            Post,
            Footer
        },
        data() {
            return {
                loading: true
            }
        },
        created() {
            this.getItems();
        },
        computed: {
            posts() {
                return this.$store.state.posts
            }
        },
        methods: {
            getItems () {
                if (this.posts.length !== 0)
                    this.loading = false;

                axios.get('https://cms.melikatursic.com/wp-json/wp/v2/posts?_embed').then((response) => {
                    if (!isEqual(this.posts, response.data)) {
                        this.$store.commit('setPosts', response.data);
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
    @import "../../assets/styles/mixins";

    section {
        display: block;
        width: 100%;
        
        .posts {
            @include grid-items(25px, 25px, 3, 2);
        }
    }
</style>
