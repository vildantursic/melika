<template>
    <div>
        <Loading v-if="loading"></Loading>
        <section v-if="!loading">
            <div class="content space">
                <div class="image">
                    <img v-if="page._embedded" :src="page._embedded['wp:featuredmedia'][0].source_url" alt="">
                </div>
                <div class="text">
                    <h1>{{page.title.rendered}}</h1>
                    <div v-html="page.content.rendered"></div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import Loading from '~/components/Loading'
    import Footer from '~/components/Footer'

    export default {
        components: {
            Loading,
            Footer
        },
        data() {
            return {
                loading: true,
                page: {
                    title: {
                        rendered: ''
                    },
                    content: {
                        rendered: ''
                    }
                }
            }
        },
        created() {
            this.getPage();
        },
        methods: {
            getPage () {
                axios.get('https://hotelsnjesko.ba/cms/wp-json/wp/v2/pages/17?_embed').then((response) => {
                    this.page = response.data;
                    this.loading = false;
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    section {
        display: block;
        width: 100%;

        .content {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;

                .image, .text {
                    width: 100% !important;
                    padding: 0 !important;
                }
            }

            .image {
                width: 50%;

                img {
                    width: 100%;
                }
            }

            .text {
                width: 50%;
                padding: 0 25px;
            }
        }
    }
</style>
