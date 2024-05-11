<script setup lang="ts">
const promises = [
    { icon: "clipboard", title: `Documentación Integral del Proyecto` },
    { icon: "airplane", title: `Despliegue y Marcha Blanca` },
    { icon: "support", title: `Soporte Post Producción` },
]

const highlightedServices = [
    {
        icon: "lupa", title: "Análisis de Procesos", description: `Realizamos pruebas con usuarios funcionales para validar su correcto funcionamiento`
    },
    {
        icon: "wheel", title: `Desarrollo de Bots`, description: `Diseñamos y creamos robots adaptados a las necesidades específicas de cada cliente.`
    },
    {
        icon: "play", title: `Certificación y Validación de Bots`, description: `Realizamos pruebas con usuarios funcionales para validar su correcto funcionamiento`
    },
]
</script>

<template>
    <div class="bg-dark">
        <div class="py-[88px] flex gap-[48px] px-[140px]">
            <div class="flex flex-col gap-[24px] items-start">
                <h3
                    class="text-white font-montserrat font-semibold text-[22px] leading-[27px] -tracking-[1%] text-center">
                    Análisis, Desarrollo e Implementación de Robots</h3>
                <p class="font-raleway font-normal text-base leading-[21px] text-white">Ofrecemos servicios completos de
                    <span class="font-bold">
                        análisis, diseño, desarrollo e implementación de robots
                    </span> para
                    automatizar procesos empresariales, nos comprometemos a proporcionar soluciones de calidad y
                    garantizar la continuidad operativa de nuestros clientes.
                </p>
                <p class="font-bold font-raleway text-base leading-[21px] text-white leading-">Te garantizamos:</p>
                <ul class="flex gap-6">
                    <li v-for="promise in promises" class="flex flex-col items-center max-w-[159px]">
                        <nuxt-icon :name="promise.icon" filled class="text-[48px]" />
                        <p class="font-raleway text-[16px] leading-[21px] text-center text-white">{{ promise.title }}
                        </p>
                    </li>
                </ul>
            </div>
            <div class="w-full">
                <p class="font-normal text-[18px] leading-[21px] text-center text-white">Servicios Destacados</p>
                <ul class="flex flex-col gap-6 mt-[24px] justify-center">
                    <li v-for="service in highlightedServices"
                        class="pb-[24px] py-[8px] items-center justify-center border-b-2 border-[#B8A2D6] border-opacity-50 flex gap-4 last:border-none">
                        <nuxt-icon :name="service.icon" filled class="text-[32px]" />
                        <p class="font-raleway font-normal text-base leading-[21px] text-white"><span
                                class="font-bold">Análisis de Procesos: </span>Identificamos oportunidades de
                            automatización mediante un análisis detallado.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>