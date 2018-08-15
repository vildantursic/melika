<template>
    <div class="main-section">
        <Loading v-show="loading"></Loading>
        <section v-show="!loading">
            <div class="albums space" >
                <Album v-for="(album, i) of albums" :key="i" :item="album"></Album>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import { isEqual } from 'lodash'
    import Loading from '~/components/Loading'
    import Album from '~/components/Album'
    import Footer from '~/components/Footer'

    export default {
        components: {
            Loading,
            Album,
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
            albums() {
                return this.$store.state.albums
            }
        },
        methods: {
            getItems () {
                if (this.albums.length !== 0)
                    this.loading = false;
        
                axios.get('https://hotelsnjesko.ba/cms/wp-json/wp/v2/albums?_embed').then((response) => {
                    if (!isEqual(this.albums, response.data)) {
                        this.$store.commit('setAlbums', response.data);
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
        
        .albums {
            @include grid-items(25px, 25px, 3, 2);
            transition: height 250ms ease-out;
        }
    }
</style>
