<script setup lang="ts">
const sectors = ref([
    { name: "TI", image: "./it.png", message: `Agilice los procesos tediosos de informática y elimine los obstáculos digitales que encuentre en el camino.` },
    { name: "Finanzas y Contabilidad", image: "./finanzas.png", message: `Acelere su flujo de caja, a la vez que mantiene el cumplimiento y elimina riesgos.` },
    { name: "Cliente al cliente", image: "./cliente.png", message: `Faculte a sus agentes presenciales y virtuales para que resuelvan los casos más rápidamente y hagan más felices a los clientes.` },
    { name: "Operaciones", image: "./operaciones.png", message: `Aumente la eficacia de su empresa mejorando la calidad, la productividad y la capacidad operativa.` },
    { name: "RR.HH.", image: "./rrhh.png", message: `Quítese de encima las tareas administrativas repetitivas y céntrese más en su personal.` },
    { name: "Ventas y Marketing", image: "./marketing.png", message: `Libere tiempo de sus equipos para que puedan centrarse en llegar a más clientes.` },
])
const counter = useInterval(2400)
const currentSectorIndex = computed(() => counter.value % sectors.value.length)
const currentSectorId = ref(0)
const activeSectorClass = "border-[#ff5a10] border-t-[6px] text-[#ff5a10] font-semibold"
const activeSlideDotClass = ref("bg-[#FF5A10] !opacity-100")

</script>

<template>
    <div class="mt-[100px]">
        <h2
            class="font-bold font-montserrat xl:text-[52px] text-[40px] xl:leading-[63px] leading-[48px] text-[#333333] text-center">
            ¿Qué
            automatizará?
        </h2>
        <div class="xl:hidden py-[30px] px-[15px] bg-white drop-shadow-2xl rounded-[20px] mt-[50px]">
            <p
                class="font-montserrat text-[18px] font-medium leading-[24px] pt-[20px] border-t-[6px] text-[#FF5A10] border-[#FF5A10]">
                {{
                    sectors[currentSectorIndex].name }}
            </p>
            <div class="mt-[50px]">
                <NuxtImg :src="sectors[currentSectorIndex].image" class="w-full" />
            </div>
            <p class="font-semibold text-[30px] leading-[40px] text-[#444444] mt-[30px]"
                v-text="sectors[currentSectorIndex].message" />
            <div class="flex gap-4 mt-[25px] justify-center xl:hidden">
                <span v-for="(sector, index) in sectors" :key="sector.name"
                    class="h-[12px] w-[12px] bg-[#666666] opacity-25 rounded-full cursor-pointer"
                    @click="currentSectorIndex = index"
                    :class="{ [activeSlideDotClass]: index === currentSectorIndex }">
                </span>
            </div>
        </div>
        <div
            class="hidden mt-[50px] xl:block bg-white rounded-[20px] p-[50px_60px] drop-shadow-xl max-w-[1233px] mx-auto">
            <div class="flex gap-[30px] w-full max-w-[1113px] mx-auto">
                <p v-for="(sector, index) in sectors" :class="{ [activeSectorClass]: currentSectorId === index }"
                    @click="currentSectorId = index"
                    class="cursor-pointer pt-[20px] w-[151px] font-light text-[18px] leading-[24px] text-[#444444] border-t-2 border-[#cccccc] ">
                    {{ sector.name }}</p>
            </div>
            <div class="mt-[58px] flex gap-[31px] items-center max-w-[1113px] mx-auto">
                <p class="max-w-[494px] font-montserrat font-semibold text-[30px] leading-[40px] text-[#444444]">{{
                    sectors[currentSectorId].message
                }}</p>
                <div class="w-[588px] h-[375px]">
                    <NuxtImg preload :src="sectors[currentSectorId].image" alt="sector image" class="object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>