<script setup lang="ts">
const services = ref([
    { label: "Consultoría RPA", id: "consultoria" },
    { label: "Análisis y Desarrollo de Bots", id: "analisis" },
    { label: "Healthcheck", id: "healthcheck" },
    { label: "Training y Certificación RPA", id: "training" },
])

defineProps<{
    activeServiceIndex: number
}>()
</script>


<template>
    <div class="sticky top-[60px] bg-dark mb-[24px] px-4 overflow-x-auto">
        <ul class="mt-[24px] flex justify-center py-2 w-[949px] mx-auto">
            <NuxtLink :href="'/servicios#' + service.id" @click="$emit('inView', { serviceIndex: index })"
                class="px-[20px] py-[8px] hover:cursor-pointer rounded-[20px] text-white"
                :class="[{ ['bg-white']: activeServiceIndex === index }]" v-for="(service, index) in services">
                <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] "
                    :class="[{ ['text-purple']: activeServiceIndex === index }]">{{ service.label }}
                </h4>
            </NuxtLink>
        </ul>
    </div>
</template>