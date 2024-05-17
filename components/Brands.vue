<script setup>
const brands = [
    "interbank",
    "bcp",
    "itau",
    "banchile",
    "pichincha",
    "cbc",
    "aceros",
    "oechsle",
    "collahuasi",
    "gloria",
    "mass",
    "paraiso",
    "lipigas",
    "grupotawa",
    "inretail",
    "enex",
    "enaex",
    "bayer",
    "supermercados",
    "centria",
    "banmedica",
    "goldfields",
    "poderjudicial",
    "clinica",
    "copeinca",
    "consalud",
    "sanfernando",
    "pesquera",
    "antofagasta",
    "cial",
    "promart",
]
</script>

<template>
    <div class="flex flex-col gap-[48px] xl:pb-[88px] pb-[56px] w-full xl:px-[140px] px-4  mx-auto bg-white">
        <slot name="header" />
        <NuxtMarquee>
            <div v-for="brand in brands" class="ml-[88px]">
                <NuxtImg preload :src="'./' + brand + '.png'" class="h-[44px] object-cover" />
            </div>
        </NuxtMarquee>
        <slot name="footer" />
    </div>
</template>