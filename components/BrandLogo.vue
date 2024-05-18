<script setup lang="ts">
interface BrandLogo {
    name: string,
    desktopSize: number[]
    mobileSize: number[]
}

const props = defineProps<{
    logo: BrandLogo
}>()

const desktopWidth = ref(props.logo.desktopSize[0])
const desktopHeight = ref(props.logo.desktopSize[1])

const mobileWidth = ref(props.logo.mobileSize[0])
const mobileHeight = ref(props.logo.mobileSize[1])

const logoClass = computed(() => {
    return `w-[${mobileWidth.value}px] h-[${mobileHeight.value}px]`
})
</script>

<template>
    <div>
        <NuxtImg :class="logoClass" :width="desktopWidth + 'px'" :height="desktopHeight + 'px'" preload
            :src="'./' + logo.name + '.png'" class="object-cover" :alt="logo.name" />
    </div>
</template>