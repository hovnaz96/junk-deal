<template>
    <div>
        <slider></slider>

        <b-container class="text-center mt-5">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">Junk Removal & Hauling Company</h1>
            <p class="jd-text-22 mt-3 jd-font-medium jd-text-18__mobile">Junk Deal is more than an average junk removal & hauling company. We can help you with organizing,
                sorting, donations, packing, moving, storage, light demo and hauling services. </p>
        </b-container>

        <!--Specialize Section Start-->
        <specialize></specialize>
        <!--Specialize Section End-->

        <!--Banner Section Start-->
        <banner-right class="d-none d-lg-block"></banner-right>
        <!--Banner Section End-->

        <!--Services Section Start-->
        <services></services>
        <!--Services Section End-->

        <!--Banner Section Start-->
        <banner-left class="d-none d-lg-block"></banner-left>
        <!--Banner Section End-->

        <!--Works Section Start-->
        <works></works>
        <!--Works Section End-->

        <!--Testimonials Section Start-->
        <testimonials></testimonials>
        <!--Testimonials Section End-->

        <!--Video Section Start-->
        <jd-video></jd-video>
        <!--Video Section End-->
    </div>
</template>

<script>
    import BannerRight from "./_partials/Home/BannerRight";
    import BannerLeft from "./_partials/Home/BannerLeft";
    import Works from "./_partials/Home/Works";
    import Testimonials from "./_partials/Home/Testimonials";
    import JdVideo from "./_partials/Home/Video";
    import Services from "./_partials/Home/Services";
    import Specialize from "./_partials/Home/Specialize";
    import Slider from "./_partials/Home/Slider";

    export default {
        components: { Specialize, Slider, BannerRight, BannerLeft, Works, Testimonials, JdVideo, Services },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    @media screen and (max-width:992px){

    }
</style>