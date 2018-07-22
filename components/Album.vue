<template>
    <nuxt-link :to="`/portfolio/${item.id}`">
        <div class="album" :style="{ 'background-image': `url(${item._embedded['wp:featuredmedia'] ?
                                    item._embedded['wp:featuredmedia'][0].media_details.sizes['full'].source_url :
                                    '/static/images/bck.png'})` }">
            <div class="pop-over">
                <h1>{{item.title.rendered}}</h1>
                <h3>Type</h3>
            </div>
        </div>   
    </nuxt-link>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style lang="scss" scoped>
    .album {
        position: relative;
        overflow: hidden;
        display: flex;
        min-height: 500px;
        width: 100%;
        align-items: center;
        justify-content: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        transition: transform 250ms ease-out, opacity 250ms ease-out;

        img {
            width: 100%;
        }
        .pop-over {
            position: absolute;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            opacity: 0;
            background: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            flex-direction: column;
            transition: ease-in-out .3s;

            h1 {
                color: black;
                padding: 0 25px;
            }
            h3 {
                color: black;
                opacity: 0.5;
                padding: 0 25px;
            }
        }

        &:hover {
            .pop-over {
                opacity: 1;
            }
        }
    }
</style>
