<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
type Service = {
    id: string,
    name: string,
    description: string,
    keypoints: {
        icon: string, title: string,
    }[],
    highlightedServices: {
        icon: string, title: string, description: string
    }[],
    dark: boolean,
    index: number
}

const props = defineProps<{
    service: Service,
}>()

const emit = defineEmits({
    inView(payload: { serviceIndex: number }) {
        return true
    }
})

function onIntersectionObserver([{ isIntersecting }]: IntersectionObserverEntry[]) {
    if (isIntersecting) {
        emit("inView", { serviceIndex: props.service.index })
    }
}

const initialTrainingDetails = [
    {
        name: "Overview", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
    {
        name: "Template A360", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
    {
        name: "AARI", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
    {
        name: "Input Data", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
    {
        name: "Build a Bot", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
    {
        name: "Caso de uso", items: [
            "Implementación de un proceso utilizando RPA Workspace, IQ Bot y Bot Insight.",
            "Generación y configuración de Dashboard de negocio."
        ],
        expanded: false
    },
]


const trainingDetails = ref(
    initialTrainingDetails
)
// starts at 9
const currentTrainingDetailsIndex = ref(0)

function expandDetail(selectedIndex: number) {
    if (currentTrainingDetailsIndex.value > 0) {
        trainingDetails.value[currentTrainingDetailsIndex.value - 1].expanded = false
        if (currentTrainingDetailsIndex.value - 1 == selectedIndex) {
            currentTrainingDetailsIndex.value = 0
            return
        }
    }
    trainingDetails.value[selectedIndex].expanded = true
    currentTrainingDetailsIndex.value = selectedIndex + 1
}


const collapsedTrainingDetailsIndex = ref(0)
const highlightedItemsClass = 'self-center'
let keypointsHeading = ref("")
if (props.service.id === 'consultoria') {
    keypointsHeading.value = 'Trabajamos con:'
} else if (props.service.id === 'analisis') {
    keypointsHeading.value = "Te garantizamos:"
} else if (props.service.id === 'healthcheck') {
    keypointsHeading.value = "Puntos Clave:"
}
</script>

<template>
    <div v-intersection-observer="onIntersectionObserver" ref="el"
        class="z-10 snap-center w-full py-[56px] xl:pt-[88px] xl:pb-[104px] px-4 xl:px-[140px] "
        :class="service.dark ? 'bg-dark' : 'bg-white '" v-bind:id="service.id">
        <div class="max-w-[1160px] mx-auto flex gap-[48px] xl:flex-row flex-col">
            <div class="flex gap-6 flex-col font-raleway text-base leading-[21px] items-start xl:max-w-[600px]">
                <h3 :class="service.dark ? 'text-white' : 'text-dark'"
                    class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%]  xl:text-center text-left text-dark">
                    {{ service.name }}</h3>
                <p class="font-raleway text-base leading-[21px]" :class="service.dark ? 'text-white' : 'text-dark'"
                    v-html="service.description"></p>
                <p v-if="keypointsHeading" class="font-bold" :class="service.dark ? 'text-white' : 'text-dark'">{{
                    keypointsHeading }}</p>
                <ul v-if="service.id !== 'training'" class="flex gap-[16px] justify-center w-full xl:flex-row flex-col">
                    <li v-for="point in service.keypoints"
                        class="flex xl:flex-col gap-[8px]  xl:max-w-[159px] items-center w-full">
                        <nuxt-icon :name="point.icon" filled class="xl:text-[56px] text-[48px]" />
                        <p class="font-raleway text-base leading-[21px] xl:text-center text-left"
                            :class="service.dark ? 'text-white' : 'text-dark'">
                            {{ point.title }}
                        </p>
                    </li>
                </ul>
                <ul v-else
                    class="w-full grid xl:grid-cols-2 grid-cols-1 gap-[24px] items-baseline margin:transition-all">
                    <template v-for="(detail, index) in trainingDetails">
                        <li v-bind="$attrs" :class="{ ['mb-[140px]']: detail.expanded }" @click="expandDetail(index)"
                            class="relative group cursor-pointer bg-purple rounded-[8px] flex justify-between  px-[16px] items-center ">
                            <span class="text-white  py-[9.5px] font-semibold text-base leading-[21px] ">{{
                                detail.name }}</span>
                            <nuxt-icon name="arrowdown" filled class="text-[24px]"
                                :class="{ ['rotate-180']: detail.expanded }" />
                            <ul v-bind="$attrs" v-show="detail.expanded"
                                class=" bg-dark list-disc transition-[max-height] absolute top-[40px] left-0  flex-col mb-[14px] xl:mb-[32px] pt-[24px] pl-[32px] gap-[1px]"
                                :class="{ ['flex']: collapsedTrainingDetailsIndex == index, ['max-h-[600px]']: detail.expanded }">
                                <li v-for="(item, index) in detail.items"
                                    class="font-raleway text-base leading-[21px] text-white">
                                    {{ item }}
                                </li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="w-full" :class="{ [highlightedItemsClass]: service.id === 'training' }">
                <p class="font-raleway text-[18px] leading-[21px] text-center"
                    :class="service.dark ? 'text-white' : 'text-dark'"
                    v-text="service.id === 'training' ? 'Entrenamiento Completo' : 'Servicios Destacados'">
                </p>
                <ul class="mt-[24px] flex flex-col gap-[24px] shrink-0">
                    <li class="text-dark font-raleway font-normal pb-[24px] py-[8px] items-center justify-start border-b-2 border-[#B8A2D6] border-opacity-50 flex gap-4 xl:flex-row flex-col last:border-none"
                        v-for="item in service.highlightedServices">
                        <nuxt-icon :name="item.icon" filled width="32px" height="32px"
                            class="text-[32px] xl:text-[56px]" />
                        <p class="font-normal font-raleway text-base leading-[21px] text-center xl:text-left"
                            :class="service.dark ? 'text-white' : 'text-dark'"><span
                                class="font-semibold xl:text-left text-center">{{
                                    item.title }}: </span>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>