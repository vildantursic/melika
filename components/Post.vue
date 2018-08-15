<template>
    <nuxt-link :to="`/blog/${item.id}`">
        <div class="blog" :style="{ 'background-image': `url(${item._embedded['wp:featuredmedia'] ?
                                    item._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url :
                                    '/images/background.png'})` }">
            <div class="pop-over">
                <h1>{{item.title.rendered}}</h1>
                <h5>{{date}}</h5>
                <h4 v-html="item.acf.description"></h4>
            </div>
        </div>   
    </nuxt-link>
</template>

<script>
    import moment from 'moment'

    export default {
        props: ['item'],
        computed: {
            date() {
                return moment(this.item.date).format("MMM Do YY")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blog {
        position: relative;
        overflow: hidden;
        display: flex;
        height: 250px;
        width: 100%;
        align-items: center;
        justify-content: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;

        img {
            width: 100%;
        }
        .pop-over {
            position: absolute;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            opacity: 1;
            background: rgba(255, 255, 255, 0.7);
            display: flex;
            flex-direction: column;
            transition: ease-in-out .3s;

            h1 {
                color: black;
                padding: 0 25px;
            }
            h4 {
                color: black;
                opacity: 0.5;
                padding: 0 25px;
            }
            h5 {
                color: black;
                padding: 0 25px;
                margin: 5px 0;
            }
        }

        &:hover {
            .pop-over {
                opacity: 0;
            }
        }
    }
</style>
