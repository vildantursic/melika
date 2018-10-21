<template>
    <div class="main-section">
        <Loading v-if="loading"></Loading>
        <section v-if="!loading">
            <div class="content space">
                <div class="contact">
                    <form method="GET" action="https://cms.melikatursic.com/wp-json/contact-form-7/v1/contact-forms/115/feedback">
                        <input placeholder="Name" type="text" name="name">
                        <input placeholder="Email" type="email" name="email">
                        <input placeholder="Subject" type="text" name="subject">
                        <textarea placeholder="Message" name="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div class="text" v-html="page.content.rendered"></div>
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
                axios.get('https://cms.melikatursic.com/wp-json/wp/v2/pages/19?_embed').then((response) => {
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
    @import '../../assets/styles/variables';

    section {
        display: block;
        width: 100%;

        .content {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;

                .contact, .text {
                    width: 100% !important;
                    padding: 0 !important;
                }
            }

            .contact {
                width: 50%;

                form {
                    text-align: left;

                    .style {
                        margin: 10px;
                        border: none;
                        border-bottom: solid 2px lightgray;
                        transition: ease-in-out .3s;
                        font-size: 1em !important;

                        &:focus {
                            outline: none;
                            border-bottom: solid 3px $main-color;
                        }
                    }

                    input {
                        height: 40px;
                        width: calc((100% / 3) - 20px);
                        @extend .style;
                    }

                    textarea {
                        width: calc(100% - 20px);
                        height: 100px;
                        font-size: 1.4em !important;
                        @extend .style;
                    }
                    
                    button {
                        border: solid 3px $main-color;
                        background: $main-color;
                        color: #fff;
                        width: 50%;
                        margin: 10px;
                        border: none;
                        height: 40px;
                        cursor: pointer;
                        font-weight: bold;
                        transition: ease-in-out .3s;

                        &:hover {
                            border: solid 3px $main-color;
                            background: transparent;
                            color: $main-color;
                        }
                    }
                }
            }

            .text {
                padding: 0 25px;
                width: 50%;
            }
        }
    }
</style>
