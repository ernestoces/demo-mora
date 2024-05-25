<script setup lang="ts">
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import { onMounted } from "vue"
const { x, y } = useWindowScroll()
const { width } = useWindowSize()
const links = [
    { label: "home", href: "/" },
    { label: "automation anywhere", href: "/automationanywhere" },
    { label: "industrias", href: null },
    { label: "servicios", href: "/servicios" },
    { label: "nosotros", href: "/nosotros" },
    { label: "novedades", href: "/novedades" },
]
const dropdownLinks = ref(
    [
        { label: "banca", href: "/industrias/banca" },
        { label: "minería", href: "/industrias/mineria" },
        { label: "salud", href: "/industrias/salud" },
        { label: "manufactura", href: "/industrias/manufactura" },
        { label: "retail", href: "/industrias/retail" },
    ]
)
const location = useBrowserLocation()
const desktopTransparentScrollThreshold = ref(210)
const isTransparentBackground = computed(() => {
    return y.value < desktopTransparentScrollThreshold.value && location.value.pathname === "/" && width.value > 600
})
const transparentBackgroundClass = 'bg-transparent'
onMounted(async () => {
    await nextTick();
    // Force a re-evaluation of the computed property
    // This might not be necessary as Vue should re-evaluate it after the nextTick
    isTransparentBackground.value;
});
// This might not be necessary as Vue should re-evaluate it after the nextTick
const menuIsOpen = ref(false)
const dropdownOpen = ref(false)
const clickedChevronClass = 'rotate-180'
</script>

<template>
    <nav
        :class="['px-[16px] xl:px-[56px] sticky top-0 py-3 z-[1000] w-full', isTransparentBackground ? transparentBackgroundClass : 'bg-dark']">
        <div class=" max-w-[1440px] flex mx-auto justify-between">
            <NuxtLink to="/">
                <NuxtImg src="/logo.png" class="w-[161px] h-[44px]" />
            </NuxtLink>
            <ul class="hidden xl:flex space-x-[48px] text-white capitalize mx-auto items-center z-10">
                <template v-for="link in links" :key="link.href">
                    <NuxtLink v-if="link.href" :to="link.href"
                        class="hover:text-lightPurple relative flex space-x-[4px] font-raleway cursor-pointer text-white">
                        {{ link.label }}
                    </NuxtLink>
                    <li v-else class="group relative flex space-x-[4px] font-raleway cursor-pointer">
                        <span class="hover:text-lightPurple"> {{ link.label }}</span>
                        <nuxt-icon v-if="link.label === 'industrias'" name="chevron" class="mt-1" />
                        <ul v-if="link.label === 'industrias'"
                            class="hidden group-hover:flex absolute top-0 mt-[20px]  flex-col gap-[8px] z-0 -left-[1/4] xl:-ml-[30px] py-[28px]  px-[32px] bg-dark">
                            <NuxtLink class="capitalize hover:text-lightPurple text-white"
                                v-for="dropdownLink in dropdownLinks" :to="dropdownLink.href">{{ dropdownLink.label }}
                            </NuxtLink>
                        </ul>
                    </li>
                </template>
            </ul>
            <NuxtLink to="/contacto" preload
                class="hidden xl:block bg-mora rounded-[3px] py-[8px] px-[22px] text-white font-raleway font-semibold text-base leading-[27px] -tracking-[1%]">
                Contacto</NuxtLink>
            <button @click="menuIsOpen = true" class="ml-left xl:hidden">
                <nuxt-icon filled name="hamburger" class="text-[32px]  m-0" />
            </button>

            <!-- MOBILE NEMU -->
            <div ref="menu" v-if="menuIsOpen"
                class="flex flex-col py-[8px] px-[16px] absolute h-screen w-full top-0 left-0 right-0 bottom-0 bg-dark">
                <button @click="menuIsOpen = false" class="text-white self-end">
                    <nuxt-icon name="close" filled class="text-[36px]" />
                </button>
                <ul class="mt-4 flex flex-col gap-[32px]">
                    <li v-for="link in links" class="flex flex-col">
                        <div class="flex items-center gap-[4px]">
                            <NuxtLink v-if="link.href" @click="menuIsOpen = false"
                                class="text-white capitalize font-raleway text-base font-normal leading-[18px] hover:text-lightPurple "
                                :to="link.href">{{ link.label }}
                            </NuxtLink>
                            <div v-else @click="dropdownOpen = !dropdownOpen" class="flex gap-2">
                    <li
                        class="cursor-pointer text-white capitalize font-raleway text-base font-normal leading-[18px] hover:text-lightPurple ">
                        {{ link.label }}
                    </li>
                    <nuxt-icon class="cursor-pointer" v-if="!link.href" name="chevronDown" filled
                        :class="{ [clickedChevronClass]: dropdownOpen }" />
            </div>
        </div>
        <div v-if="dropdownOpen && !link.href" class="mt-[24px]">
            <div class="pl-4 flex flex-col gap-4">
                <NuxtLink @click="menuIsOpen = false" preload :to="dropdownLink.href"
                    class="cursor-pointer text-white hover:text-lightPurple  capitalize font-raleway text-base leading-[21px]"
                    v-for="dropdownLink in dropdownLinks">
                    {{ dropdownLink.label }}
                </NuxtLink>
            </div>
        </div>
        </li>
        </ul>
        <div class="mt-auto p-6 flex justify-between items-center">
            <NuxtLink to="/contacto" @click="menuIsOpen = false"
                class="hover:text-lightPurple text-white font-raleway text-base leading-[21px]">Contáctanos
            </NuxtLink>
            <NuxtLink to="https://www.linkedin.com/company/automation-chile-peru/?viewAsMember=true" target="_blank">
                <nuxt-icon name="linkedin" filled class="text-21px" />
            </NuxtLink>
        </div>
        </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    font-weight: bold
}
</style>