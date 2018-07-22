<template>
    <header :style="{'background': color === 'black' ? `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/rip.svg') bottom center` : ''}">
        <nav>
            <div class="logo">
                <nuxt-link :to="{ name: 'index' }" :style="{ 'color': color }">
                    <h1>Melika Tursić</h1>
                </nuxt-link>
            </div>
            <ul>
                <li><nuxt-link :style="{ 'color': color }" :to="{ name: 'index' }" exact>Home</nuxt-link></li>
                <li><nuxt-link :style="{ 'color': color }" :to="{ name: 'about' }">About</nuxt-link></li>
                <li><nuxt-link :style="{ 'color': color }" :to="{ name: 'portfolio' }">Portfolio</nuxt-link></li>
                <li><nuxt-link :style="{ 'color': color }" :to="{ name: 'blog' }">Blog</nuxt-link></li>
                <li><nuxt-link :style="{ 'color': color }" :to="{ name: 'contact' }">Contact</nuxt-link></li>
            </ul>
            <i :style="{ 'color': color }" class="fas fa-bars" @click="mobileMenu = !mobileMenu"></i>
        </nav>
        <div class="mobile-nav" :class="{'open-menu': mobileMenu}">
            <ul>
                <li><i class="fas fa-times" @click="mobileMenu = !mobileMenu"></i></li>
                <li @click="mobileMenu = !mobileMenu"><nuxt-link :to="{ name: 'index' }" exact>Home</nuxt-link></li>
                <li @click="mobileMenu = !mobileMenu"><nuxt-link :to="{ name: 'about' }">About</nuxt-link></li>
                <li @click="mobileMenu = !mobileMenu"><nuxt-link :to="{ name: 'portfolio' }">Portfolio</nuxt-link></li>
                <li @click="mobileMenu = !mobileMenu"><nuxt-link :to="{ name: 'blog' }">Blog</nuxt-link></li>
                <li @click="mobileMenu = !mobileMenu"><nuxt-link :to="{ name: 'contact' }">Contact</nuxt-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            mobileMenu: false
        }
    },
    computed: {
        color (){
            return this.$route.fullPath === '/' ? 'white' : 'black'
        }
    }
}    
</script>

<style lang="scss" scoped>
    @import '../assets/styles/mixins';
    @import '../assets/styles/variables';

    header {
        height: 100px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;
        background-size: cover;

        .link-style {
            position: relative;
            color: black;
            text-decoration: none;

            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: $main-color;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
            }
            &:hover:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
        }

        .nuxt-link-exact-active, .nuxt-link-active {
            text-decoration-style: wavy !important;
            text-decoration-color: $main-color !important;

            &:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
        }

        .mobile-nav {
            position: absolute;
            top: 0;
            right: -100vw;
            width: 100vw;
            height: 100vh;
            background: white;
            transition: ease-in-out .3s; 

            ul {
                list-style: none;
                width: 100%;
                padding: 0;

                li {
                    margin: 20px 0;

                    a {
                        @extend .link-style;
                    }
                    .nuxt-link-exact-active, .nuxt-link-active {
                        background: $main-color;
                    }
                }
                li:not(:first-child) {
                  text-align: center;
                  font-size: 1.3em;  
                }
                i {
                    margin: 0 20px;
                }
            }
        }
        .open-menu {
            right: 0;
        }

        nav {
            @include default-spacing(0);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .logo {
                display: flex;
                align-items: center;
                justify-content: center;

                a {
                    color: black;
                    text-decoration: none;
                    font-size: 1.5em;
                }
            }

            ul {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0;
                
                @media (max-width: 768px) {
                    display: none;
                }

                li {
                    position: relative;
                    text-transform: uppercase;

                    a {
                        @extend .link-style;
                    }
                }
                li:not(:last-child) {
                    margin-right: 40px;
                }
            }

            i {
                display: none;
                margin: 0 20px;

                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
    }


</style>
