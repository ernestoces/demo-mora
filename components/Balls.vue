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
    <div class="max-w-[1440px] mx-auto flex gap-[16px] pt-[88px] pb-[88px]">
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
        <div class="w-full">
            <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-center text-white">Lo que nos
                diferencia
            </h4>
            <div class="w-[562p] h-[340px] relative shrink-0">
                <div v-for="(ball, index) in balls"
                    class="justify-center flex absolute  w-[182px] h-[182px] bg-purple rounded-full  first:left-0 first:top-0 top-[77px] left-[190px]  last:top-[166px] last:left-[380px]">
                    <div class="flex flex-col items-center justify-center gap-[8px] w-full max-w-[166px]">
                        <nuxt-icon :name="ball.icon" class="text-[33px]" filled />
                        <p class="font-raleway font-semibold text-base leading-[21px] text-white text-center">{{
                            ball.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>