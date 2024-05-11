<script setup lang="ts">
const keypoints = [
    { icon: "chart", title: `Mejora de Eficiencia y Estabilidad` },
    { icon: "results", title: `Resultados consistentes` },
    { icon: "folder", title: `Cumplimiento Normativo` },
]

const highlightedServices = [
    {
        icon: "zoom", title: "Revisión de Configuración", description: `Evaluamos la configuración de automatización para identificar oportunidades de mejora.`
    },
    {
        icon: "increase", title: `Optimización de Procesos`, description: `Aumentamos la eficiencia y la estabilidad de los programas RPA.`
    },
    {
        icon: "vanguard", title: `Gobernanza y Cumplimiento`, description: `Estandarizamos la gobernanza del programa RPA para garantizar calidad y coherencia.`
    },
]
</script>


<template>
    <div class="w-full bg-white flex gap-[48px] pt-[88px] pb-[104px] px-[140px]">
        <div>
            <div class="flex gap-6 flex-col font-raleway text-base leading-[21px] items-start">
                <h3
                    class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%]  text-center text-dark">
                    Servicio de Healthcheck Especializado</h3>
                <p>Nuestro servicio de Healthcheck <span class="font-bold">mejora la eficiencia y estabilidad de los
                        programas RPA</span>
                    al
                    identificar y abordar las causas fundamentales. Proporcionamos recomendaciones personalizadas para
                    optimizar los programas de automatización y garantizar resultados consistentes.</p>
                <p class="font-bold">Puntos Clave:</p>
                <ul class="flex gap-[16px]">
                    <li v-for="point in keypoints" class="flex flex-col gap-[8px]  max-w-[159px] items-center">
                        <nuxt-icon :name="point.icon" filled class="text-[56px]" />
                        <p class="font-raleway text-base leading-[21px] text-center">
                            {{ point.title }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-full">
            <p class="font-raleway text-[18px] leading-[21px] text-center">Servicios Destacados</p>
            <ul class="mt-[24px]">
                <li class="text-dark font-raleway font-normal pb-[24px] py-[8px] items-center justify-center border-b-2 border-[#B8A2D6] border-opacity-50 flex gap-4 last:border-none"
                    v-for="service in highlightedServices">
                    <nuxt-icon :name="service.icon" filled class="text-[32px]" />
                    <p><span class="font-semibold">{{ service.title }}: </span>{{ service.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>