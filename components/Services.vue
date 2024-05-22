<script setup>
const services = [
    {
        icon: "horas",
        upperText: "+30K",
        bottomText: "horas automatizadas"
    },
    {
        icon: "proyectos",
        upperText: "+1000",
        bottomText: "proyectos realizados"
    },
]
</script>

<template>
    <div
        class="xl:py-[88px] py-[56px] px-4 flex xl:flex-row flex-col gap-[48px] w-full xl:px-[140px] justify-center bg-white">
        <div>
            <div class="xl:pt-[49px] max-w-[604px]">
                <h2
                    class="font-montserrat text-[33px] font-bold leading-[40px] text-dark max-w-[456px] xl:text-left text-center">
                    Servicios
                    Personalizados para tu Empresa
                </h2>
                <p
                    class="text-dark mt-[24px] font-raleway font-regular text-base leading-[21px] xl:text-left text-center">
                    Descubre cómo
                    implementamos
                    soluciones <span class="font-semibold text-dark">hiper
                        automatizadas</span> a través de una variedad de
                    servicios, todos diseñados para adaptarse a las necesidades específicas de tu empresa.</p>
            </div>

            <div class="flex xl:flex-row flex-col items-center xl:items-normal gap-[24px] mt-[24px]">
                <div v-for="service in services" class="flex gap-[16px] items-center">
                    <nuxt-icon :name="service.icon" filled class="text-[84px] xl:text-[92px]" />
                    <div class="flex flex-col ">
                        <p
                            class="font-montserrat font-bold xl:font-black xl:text-[40px] text-[33px] xl:leading-[48px] leading-[40px] text-dark">
                            {{
                                service.upperText }}</p>
                        <small class="font-raleway text-base font-normal text-dark leading-[21px]">{{ service.bottomText
                            }}</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="shrink-0 xl:w-[508px] xl:h-[382px] w-full -order-1">
            <NuxtImg :src="'./services.png'" alt="servicios" height="382" width="508" class="w-full" />
        </div>
    </div>
</template>