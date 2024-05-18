<script setup lang="ts">
import { useScroll } from '@vueuse/core'
const testimonies = ref([
    {
        icon: "enaexColored",
        description: `“La implementación de soluciones de automatización de Mora Group ha sido un cambio de juego para nuestra empresa. Hemos visto una mejora significativa en la eficiencia operativa y una reducción notable en los costos.”`,
        representative: "Carlos Gutiérrez",
        role: "CTO de Enaex"

    },
    {
        icon: "grupotawaColored",
        description: `“Estamos encantados con el nivel de profesionalismo y experiencia que han demostrado en todo momento. Su enfoque personalizado y sus soluciones innovadoras nos han permitido superar obstáculos y alcanzar nuevos niveles de éxito.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
    {
        icon: "collahuasiColored",
        description: `“La experiencia con las soluciones de automatización de Mora Group ha transformado por completo nuestra empresa. Desde su implementación, hemos experimentado un aumento notable en la eficiencia operativa y una reducción significativa en costos.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
    {
        icon: "enaexColored",
        description: `“La implementación de soluciones de automatización de Mora Group ha sido un cambio de juego para nuestra empresa. Hemos visto una mejora significativa en la eficiencia operativa y una reducción notable en los costos.”`,
        representative: "Carlos Gutiérrez",
        role: "CTO de Enaex"

    },
    {
        icon: "grupotawaColored",
        description: `“Estamos encantados con el nivel de profesionalismo y experiencia que han demostrado en todo momento. Su enfoque personalizado y sus soluciones innovadoras nos han permitido superar obstáculos y alcanzar nuevos niveles de éxito.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
    {
        icon: "collahuasiColored",
        description: `“La experiencia con las soluciones de automatización de Mora Group ha transformado por completo nuestra empresa. Desde su implementación, hemos experimentado un aumento notable en la eficiencia operativa y una reducción significativa en costos.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
    {
        icon: "enaexColored",
        description: `“La implementación de soluciones de automatización de Mora Group ha sido un cambio de juego para nuestra empresa. Hemos visto una mejora significativa en la eficiencia operativa y una reducción notable en los costos.”`,
        representative: "Carlos Gutiérrez",
        role: "CTO de Enaex"

    },
    {
        icon: "grupotawaColored",
        description: `“Estamos encantados con el nivel de profesionalismo y experiencia que han demostrado en todo momento. Su enfoque personalizado y sus soluciones innovadoras nos han permitido superar obstáculos y alcanzar nuevos niveles de éxito.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
    {
        icon: "collahuasiColored",
        description: `“La experiencia con las soluciones de automatización de Mora Group ha transformado por completo nuestra empresa. Desde su implementación, hemos experimentado un aumento notable en la eficiencia operativa y una reducción significativa en costos.”`,
        representative: "Ana López",
        role: "Dir. Operaciones de Tawa Group"
    },
])


const testimoniesList = ref<HTMLElement | null>(null)
const { width } = useElementSize(testimoniesList)
const scroll = ref(useScroll(testimoniesList, { behavior: 'smooth' }))
const activeTestimonyPointClass = ref('w-[24px] h-[12px] rounded-[10px] bg-mora')
const testimonyPointClass = ref("w-[12px] h-[12px] border border-mora hover:bg-purple rounded-full")
const { pause, resume, isActive } = useIntervalFn(() => {
    if (!scroll.value.isScrolling) {
        if (scroll.value.x > width.value + 72) {
            scroll.value.x = 0
        } else {
            scroll.value.x += width.value + 72
        }
    }

}, 5000)


</script>

<template>
    <div class="xl:pt-[127px] pt-[79px] pb-[88px] w-full px-6 xl:px-[140px] bg-dark">
        <div class="max-w-[949px] mx-auto flex flex-col gap-[24px]">
            <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-white text-center">Testimonios de
                Clientes Satisfechos</h2>
            <p class="font-raleway text-[18px] leading-[21px] text-center text-white">Conoce lo que dicen nuestros
                clientes sobre cómo nuestras soluciones han impulsado su éxito empresarial.</p>
        </div>

        <ul ref="testimoniesList"
            class="mt-[64px] flex gap-[72px]  w-full max-w-[1160px] mx-auto  overflow-x-hidden mb-[48px]">
            <li v-for="(testimony, index) in testimonies"
                class="peer snap-x shrink-0 gap-[31px] bg-white flex flex-col items-start p-[32px] rounded-[5px] w-full max-w-[346px]" ">
                <div>
                    <nuxt-icon :name="testimony.icon" filled width="115px" height="25px" />
    </div>
    <p class="font-raleway font-regular text-base leading-[21px] text-dark">{{ testimony.description }}</p>
    <div class="flex flex-col">
        <p class="font-montserrat font-semibold text-[18px] leading-[24px] text-dark">{{
            testimony.representative }}</p>
        <p class="font-raleway font-regular text-[16px] leading-[21px] text-dark ">{{ testimony.role }}</p>
    </div>
    </li>
    </ul>

    <div class="flex gap-4 items-center justify-center cursor-pointer">
        <div @click="scroll.x = 0"
            :class="[testimonyPointClass, { [activeTestimonyPointClass]: scroll.arrivedState.left }]">
        </div>
        <div @click="scroll.x = width + 72"
            :class="[testimonyPointClass, { [activeTestimonyPointClass]: !scroll.arrivedState.right && !scroll.arrivedState.left }]">
        </div>
        <div @click="scroll.x += width + 72" :class="[testimonyPointClass, {
            [activeTestimonyPointClass]:
                !!scroll.arrivedState.right
        }]">
        </div>
    </div>
    </div>
</template>

<style>
.nuxt-icon svg {
    margin-bottom: 0;
    width: 100%;
}
</style>