<script setup lang="ts">
const { y } = useWindowScroll()
const services = ref([
    { label: "Consultoría RPA", id: "consultoria" },
    { label: "Análisis y Desarrollo de Bots", id: "analisis" },
    { label: "Healthcheck", id: "healthcheck" },
    { label: "Training y Certificación RPA", id: "training" },
])

defineProps<{
    activeServiceIndex: number
}>()

function handleLinkClick(id: string, index: number) {
    emit('onTabClick', { serviceIndex: index })
    const element = document.getElementById(id);
    if (element) {
        const offset = 200; // Adjust this value based on the height of your sticky navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
}

const emit = defineEmits({
    onTabClick(payload: { serviceIndex: number }) {
        return true
    }
})

</script>


<template>
    <div class="sticky top-[60px] bg-dark mb-[24px] px-4 overflow-x-auto">
        <ul class="mt-[24px] flex justify-center py-2 w-[949px] mx-auto">
            <NuxtLink @click.prevent="() => handleLinkClick(service.id, index)"
                class="px-[20px] py-[8px] hover:cursor-pointer rounded-[20px] text-white"
                :class="[{ ['bg-white']: activeServiceIndex === index }]" v-for="(service, index) in services">
                <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] "
                    :class="[{ ['text-purple']: activeServiceIndex === index }]">{{ service.label }}
                </h4>
            </NuxtLink>
        </ul>
    </div>
</template>