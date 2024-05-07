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
    <div class="py-[88px] flex gap-[48px] w-full px-[140px] justify-center">
        <div>
            <div class="pt-[49px] max-w-[604px]">
                <h2 class="font-montserrat text-[33px] font-bold leading-[40px] text-dark max-w-[456px]">Servicios
                    Personalizados para tu
                    Empresa
                </h2>
                <p class="mt-[24px] font-raleway font-regular">Descubre cómo implementamos soluciones <span
                        class="font-semibold text-dark">hiper
                        automatizadas</span> a través de una variedad de
                    servicios, todos diseñados para adaptarse a las necesidades específicas de tu empresa.</p>
            </div>
            <div class="flex gap-[24px] mt-[24px]">
                <div v-for="service in services" class="flex gap-[16px] items-center">
                    <nuxt-icon :name="service.icon" filled class="text-[92px]" />
                    <div class="flex flex-col ">
                        <p class="font-montserrat font-black text-[40px] leading-[48px] text-dark">{{
                            service.upperText }}</p>
                        <small class="font-raleway text-base text-dark leading-[21px]">{{ service.bottomText }}</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="shrink-0 w-[508px] h-[382px]">
            <img :src="'./services.png'" alt="servicios" height="382" width="508" class="w-full">
        </div>
    </div>
</template>