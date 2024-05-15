<script setup lang="ts">
const sectors = ref([
    { name: "TI", image: "./it.png", message: `Agilice los procesos tediosos de informática y elimine los obstáculos digitales que encuentre en el camino.` },
    { name: "Finanzas y Contabilidad", image: "./finanzas.png", message: `Acelere su flujo de caja, a la vez que mantiene el cumplimiento y elimina riesgos.` },
    { name: "Cliente al cliente", image: "./cliente.png", message: `Faculte a sus agentes presenciales y virtuales para que resuelvan los casos más rápidamente y hagan más felices a los clientes.` },
    { name: "Operaciones", image: "./operaciones.png", message: `Aumente la eficacia de su empresa mejorando la calidad, la productividad y la capacidad operativa.` },
    { name: "RR.HH.", image: "./rrhh.png", message: `Quítese de encima las tareas administrativas repetitivas y céntrese más en su personal.` },
    { name: "Ventas y Marketing", image: "./marketing.png", message: `Libere tiempo de sus equipos para que puedan centrarse en llegar a más clientes.` },
])
const currentSectorIndex = ref(0)
const activeSectorClass = "border-[#ff5a10] border-t-[6px] text-[#ff5a10] font-semibold"
</script>

<template>
    <div class="mt-[100px]">
        <h2 class="font-semibold text-[60px] text-[#333333] text-center">¿Qué automatizará?</h2>
        <div class="mt-[50px] bg-white rounded-[20px] p-[50px_60px]">
            <div class="flex gap-[30px] w-full max-w-[1113px] mx-auto">
                <p v-for="(sector, index) in sectors" :class="{ [activeSectorClass]: currentSectorIndex === index }"
                    @click="currentSectorIndex = index"
                    class="cursor-pointer pt-[20px] w-[150px] font-light text-[18px] leading-[24px] text-[#444444] border-t-2 border-[#cccccc] ">
                    {{
                        sector.name }}</p>
            </div>
            <div class="mt-[58px] flex gap-[31px] items-center max-w-[1113px] mx-auto">
                <p class="max-w-[494px] font-semibold text-[30px] leading-[40px] text-[#444444]">{{
                    sectors[currentSectorIndex].message
                    }}</p>
                <div class="w-[588px] h-[375px]">
                    <img :src="sectors[currentSectorIndex].image" alt="sector image" class="object-cover">
                </div>
            </div>
        </div>
    </div>
</template>