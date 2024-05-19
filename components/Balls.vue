<script setup lang="ts">
const balls = ref(
    [
        { icon: "clock", message: "Precisión en el tiempo de entrega" },
        { icon: "calendar", message: "Planificación y control eficientes" },
        { icon: "arrow", message: "Avances significativos en cada fase" },
    ]
)
</script>

<template>
    <div class="bg-dark py-[32px] px-4 xl:py-[88px] xl:px-[140px]">
        <div class="max-w-[1160px] mx-auto flex gap-[16px] flex-col xl:flex-row">
            <div class="flex flex-col gap-[24px]">
                <h1 class="text-white font-montserrat font-bold text-[50px] leading-[61px]">Conoce Nuestros <p
                        class="text-mora">Servicios</p>
                </h1>
                <div class="flex flex-col gap-[16px] font-raleway text-white text-[18px] leading-[21px]">
                    <p>En Mora Technology, ofrecemos una amplia gama de servicios especializados en automatización de
                        procesos y consultoría por automatización inteligente. Nuestro enfoque se centra en optimizar la
                        eficiencia empresarial y mejorar la productividad mediante soluciones innovadoras y tecnologías
                        avanzadas.</p>
                    <p>Trabajamos bajo la metodología ágil SCRUM, lo cual nos permite ser más productivos y eficientes
                        por medio de la optimización de procesos.</p>
                </div>
            </div>
            <div class="w-full mt-[40px] xl:mt-0">
                <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-center text-white">Lo que nos
                    diferencia
                </h4>
                <div class="xl:w-[562px] xl:h-[340px] w-[328px] h-[328px] mx-auto relative shrink-0 mt-[40px]">
                    <div v-for="(ball, index) in balls"
                        class="justify-center flex absolute xl:w-[182px] xl:h-[182px] w-[153px] h-[153px] bg-purple rounded-full first:top-0 first:left-[87px] bottom-0 left-0 last:left-[175px]  last:bottom-0 first:xl:left-0 first:xl:top-0 xl:top-[77px] xl:left-[190px]  last:xl:top-[166px] last:xl:left-[380px]">
                        <div
                            class="flex flex-col items-center justify-center gap-[8px] w-full xl:max-w-[166px] max-w-[128px]">
                            <nuxt-icon :name="ball.icon" class="text-[33px]" filled />
                            <p
                                class="font-raleway xl:font-semibold font-regular text-base leading-[21px] text-white text-center">
                                {{
                                    ball.message }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>