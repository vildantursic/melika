<template>
    <footer class="">
        <section>
            <div>Copyright &copy; 2018, Melika Tursic</div>
            <Social></Social>
        </section>
    </footer>    
</template>

<script>
    import Social from './Social'

    export default {
        components: {
            Social
        }
    }
</script>

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
