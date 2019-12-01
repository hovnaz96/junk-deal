<template>
    <div class="p-0 p-lg-4 mt-4 junks" id="services" data-aos="fade">
        <b-container>
            <b-row>
                <b-col class="text-center mt-3 mt-lg-0 p-0__mobile" lg="4" sm="12" v-for="(service, key) in services" :key="`service-top-${key}`">
                    <b-img :src="`/img/home/services/${service.img}`" class="services--img_rounded"></b-img>

                    <section class="text-left px-3 px-lg-0">
                        <h3 class="jd-text-22 jd-text-light jd-font-medium bottom-line-def-color mt-3 mt-lg-5">{{ service.title }}</h3>
                        <p class="jd-text-18 jd-text-dark">
                            {{ service.description }}
                        </p>
                    </section>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services : [
                    { title: "Residential Junk Removal", img: "service-1.jpg", description: "Our Residential Junk Removal services gives you an easy solution for de-cluttering your home or clearing your yard from unwanted junk."},
                    { title: "Commercial Junk Removal", img: "service-2.jpg", description: "Junk Deal is your one-stop-shop for your Commercial Junk Removal needs. We take anything from file cabinets to electronic waste."},
                    { title: "Office Furniture Liquidators", img: "service-3.jpg", description: "Junk Deal offers an Office Furniture Liquidators service that can help you with getting rid of unwanted office furniture or anything else you need removed from your work space."},
                ]
            }
        }
    }
</script>


<style scoped lang="scss">
/deep/.services--img_rounded{
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: cover;
}

@media screen and (max-width: 992px) {
    /deep/.services--img_rounded{
        border-radius: 0;
        width: 100%;
        height: auto;
    }
    /deep/.container{
        margin: 0;
        padding: 0;
        max-width: 100% !important;
        .row{
            margin: 0;
        }
    }

    .p-0__mobile{
        padding: 0;
    }
}
</style>