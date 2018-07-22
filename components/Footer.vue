<template>
    <footer class="">
        <section>
            <div>Copyright &copy; 2018, Melika Tursic</div>
            <ul>
                <li>
                    <a target="_blank" href="https://www.facebook.com/melika.tursic?ref=br_rs">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/melikatursic/?hl=en">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://">
                        <i class="fab fa-youtube"></i>
                    </a>
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
        }
    }
</style>
