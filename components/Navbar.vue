<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';
import { useBrowserLocation } from '@vueuse/core'
const scroll = ref(useWindowScroll())
const links = [
    { label: "home", href: "/" },
    { label: "automation anywhere", href: "/automationanywhere" },
    { label: "industrias", href: "/#industrias" },
    { label: "servicios", href: "/servicios" },
    { label: "nosotros", href: "/nosotros" },
    { label: "novedades", href: "/novedades" },
]

const dropdownLinks = [
    { label: "banca", href: "/#banca" },
    { label: "minería", href: "/#mineria" },
    { label: "salud", href: "/#salud" },
    { label: "manufactura", href: "/#manufactura" },
    { label: "retail", href: "/#retail" },
]
const location = ref(useBrowserLocation())
const scrolledClass = ref('bg-dark')
const defaultClass = ref("px-[16px] xl:px-[56px] sticky top-0 py-3 z-[1000] w-full")
const scrollThreshold = location?.value?.pathname?.includes("nosotros") ? 100 : 210
const menuIsOpen = ref(false)
const dropdownOpen = ref(false)
const clickedChevronClass = 'rotate-180'
</script>

<template>
    <nav v-bind:class="{ [defaultClass]: true, [scrolledClass]: scroll.y > scrollThreshold }">
        <div class="max-w-[1440px] flex mx-auto justify-between">
            <a href="/">
                <img src="/logo.png" class="w-[161px] h-[44px]" />
            </a>
            <ul class="hidden xl:flex space-x-[48px] text-white capitalize mx-auto items-center">
                <a :href="link.href" v-for="link in links" class="flex space-x-[4px] relative font-raleway">
                    <span class="hover:text-lightPurple"> {{ link.label }}</span>
                    <nuxt-icon v-if="link.label === 'industrias'" name="chevron" class="mt-1" />
                    <div v-if="link.label === 'industrias'" class="hidden absolute top-0 left-0">dropdown</div>
                </a>
            </ul>
            <a href="/contacto"
                class="hidden xl:block bg-mora rounded-[3px] py-[8px] px-[22px] text-white font-raleway font-semibold text-base leading-[27px] -tracking-[1%]">Contacto</a>
            <button @click="menuIsOpen = true; $emit('scrollLock')" class="ml-left xl:hidden">
                <nuxt-icon filled name="hamburger" class="text-[32px]  m-0" />
            </button>
            <div ref="menu" v-if="menuIsOpen"
                class="flex flex-col py-[8px] px-[16px] absolute h-screen w-full top-0 left-0 right-0 bottom-0 bg-dark">
                <button @click="menuIsOpen = false" class="text-white self-end">
                    <nuxt-icon name="close" filled class="text-[36px]" />
                </button>
                <ul class="mt-4 flex flex-col gap-[32px]">
                    <li v-for="link in links" class="flex flex-col">
                        <div class="flex items-center gap-[4px]">
                            <NuxtLink @click="menuIsOpen = false"
                                class="text-white capitalize font-raleway text-base font-normal leading-[18px] hover:text-lightPurple "
                                :href="link.href">{{ link.label }} </NuxtLink>
                            <nuxt-icon @click="dropdownOpen = !dropdownOpen" class="cursor-pointer"
                                v-if="link.href === '/#industrias'" name="chevronDown" filled
                                :class="{ [clickedChevronClass]: dropdownOpen }" />
                        </div>
                        <div v-if="dropdownOpen && link.href === '/#industrias'" class="mt-[24px]">
                            <ul class="pl-4 flex flex-col gap-4">
                                <li class="cursor-pointer text-white hover:text-lightPurple  capitalize font-raleway text-base leading-[21px]"
                                    v-for="dropdownLink in dropdownLinks">
                                    {{ dropdownLink.label }}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div class="mt-auto p-6 flex justify-between items-center">
                    <p class="text-white font-raleway text-base leading-[21px]">Contáctanos</p>
                    <nuxt-icon name="linkedin" filled class="text-21px" />
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active:first-child {
    font-weight: bold
}
</style>