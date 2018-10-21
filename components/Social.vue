<template>
    <ul>
        <li>
            <nuxt-link to="https://www.facebook.com/melika.tursic?ref=br_rs">
                <i class="fab fa-facebook-f"></i>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="https://www.instagram.com/melikatursic/?hl=en">
                <i class="fab fa-instagram"></i>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="https://twitter.com">
                <i class="fab fa-twitter"></i>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="https://youtube.com">
                <i class="fab fa-youtube"></i>
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
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
</style>
