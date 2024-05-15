<script setup lang="ts">
const emit = defineEmits({
    inView(payload: { serviceIndex: number }) {
        return true
    }
})
const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target)

watch(targetIsVisible, () => {
    emit("inView", { serviceIndex: 0 })
})

const tools = [
    { icon: "growth", title: "Modelos Sostenibles y Escalables para la Robotización" },
    { icon: "verified", title: "Calidad y Consistencia en la Entrega de Procesos" },
    { icon: "light", title: "Colaboración y Capacitación Continua" },
]

const highlightedServices = [
    { icon: "zoom", title: "Workshops de Descubrimiento", description: "Identificamos y evaluamos procesos candidatos para la automatización." },
    { icon: "checkboard", title: "Centros de Excelencia", description: "Refinamos la estructura operativa y la gobernanza del programa RPA." },
    { icon: "ecram", title: "Estrategia y Planificación", description: "Desarrollamos un plan de automatización personalizado y un caso de negocio." },
]
</script>

<template>
    <div ref="target" class=" bg-white py-[88px] px-[140px]">
        <div class="flex gap-[48px] max-w-[1440px] mx-auto">
            <div class="text-dark flex flex-col items-start ">
                <h3 class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-center">
                    Consultoría RPA</h3>
                <p class="font-raleway font-normal text-base leading-[21px] mt-[24px]">Nuestra consultoría RPA está
                    diseñada
                    para
                    <span class="font-semibold">identificar y evaluar procesos susceptibles de
                        automatización</span>, colaborando
                    estrechamente con las
                    organizaciones para impulsar la transformación digital y mejorar la eficiencia operativa.
                </p>
                <p class="font-raleway text-base leading-[21px] font-bold mt-[24px]">Trabajamos con:</p>
                <ul class="gap-[24px] flex mt-[48px]">
                    <li v-for="tool in tools" class="flex flex-col gap-[8px] max-w-[165px] justify-center items-center">
                        <nuxt-icon :name="tool.icon" filled class="text-[56px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-dark">{{ tool.title }}</p>
                    </li>
                </ul>
            </div>
            <div class="w-full">
                <p class="font-raleway text-[18px] text-center leading-[21px]">Servicios Destacados</p>
                <ul class="mt-[24px] flex flex-col gap-[24px]">
                    <li class="pb-[24px] border-b-2 border-[#B8A2D6] border-opacity-50 flex gap-4 last:border-none"
                        v-for="service in highlightedServices">
                        <nuxt-icon :name="service.icon" filled class="text-[32px]" />
                        <p class="font-normal text-base leading-[21px] text-dark"><span class="font-semibold">{{
                            service.title }}: </span>{{ service.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>