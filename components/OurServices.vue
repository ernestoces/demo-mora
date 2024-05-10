<script setup lang="ts">
const services = ref([
    { label: "Consultoría RPA", id: "consultoria" },
    { label: "Análisis y Desarrollo de Bots", id: "analisis" },
    { label: "Healthcheck", id: "healthcheck" },
    { label: "Training y Certificación RPA", id: "training" },
])

const activeServiceIndex = ref(0)
</script>

<template>
    <div class="bg-dark ">
        <div class="">
            <p class="text-center font-semibold font-raleway text-base leading-[21px] text-white">Nuestros Servicios</p>
            <ul class="mt-[24px] flex justify-center pb-[24px]">
                <a :href="'/servicios#' + service.id"
                    :class="[{ ['bg-white text-purple']: activeServiceIndex === index }]"
                    class="px-[20px] py-[8px] text-white hover:cursor-pointer rounded-[20px]"
                    v-for="(service, index) in services">
                    <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] ">{{ service.label }}
                    </h4>
                </a>
            </ul>
        </div>
    </div>
</template>