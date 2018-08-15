<template>
    <footer class="">
        <section>
            <div>Copyright &copy; 2018, Melika Tursic</div>
            <ul>
                <li>
                    <nuxt-link to="https://www.facebook.com/melika.tursic?ref=br_rs">
                        <i class="fab fa-facebook-f">
                            <span class="link-desc">Facebook</span>
                        </i>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="https://www.instagram.com/melikatursic/?hl=en">
                        <i class="fab fa-instagram">
                            <span class="link-desc">Instagram</span>
                        </i>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="https://twitter.com">
                        <i class="fab fa-twitter">
                            <span class="link-desc">Twitter</span>
                        </i>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="https://youtube.com">
                        <i class="fab fa-youtube">
                            <span class="link-desc">YouTube</span>
                        </i>
                    </nuxt-link>
                </li>
            </ul>
        </section>
    </footer>    
</template>

<style lang="scss" scoped>
    @import '../assets/styles/mixins';

    footer {
        height: 70px;
        z-index: 100;
        width: 100%;

        section {
            @include default-spacing(0);
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
            }

            ul {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 0;

                &:hover {
                    li {
                        opacity: 0.5;
                    }
                }

                li {
                    transition: ease-in-out .3s;

                    &:hover {
                        opacity: 1;
                    }

                }
                li:not(:last-child) {
                    margin-right: 40px;
                }
            }

            a {
                color: unset;
            }
            .link-desc {
                opacity: 0;
                width: 0;
                display: flex;
            }
        }
    }
</style>
