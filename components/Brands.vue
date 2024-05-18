<script setup>
const brands = [
    { name: "interbank", desktopSize: [137, 26], mobileSize: [116, 22] },
    { name: "bcp", desktopSize: [103, 26], mobileSize: [87, 22] },
    { name: "itau", desktopSize: [47, 47], mobileSize: [39, 39] },
    { name: "banchile", desktopSize: [76, 30], mobileSize: [60, 24] },
    { name: "pichincha", desktopSize: [118, 26], mobileSize: [100, 22] },
    { name: "cbc", desktopSize: [102, 26], mobileSize: [86, 22] },
    { name: "aceros", desktopSize: [131, 26], mobileSize: [110, 22] },
    { name: "oechsle", desktopSize: [115, 26], mobileSize: [97, 22] },
    { name: "collahuasi", desktopSize: [106, 30], mobileSize: [78, 22] },
    { name: "gloria", desktopSize: [74, 40], mobileSize: [65, 35] },
    { name: "mass", desktopSize: [112, 26], mobileSize: [95, 22] },
    { name: "paraiso", desktopSize: [122, 26], mobileSize: [103, 22] },
    { name: "lipigas", desktopSize: [115, 26], mobileSize: [97, 22] },
    { name: "grupotawa", desktopSize: [127, 26], mobileSize: [108, 22] },
    { name: "inretail", desktopSize: [116, 26], mobileSize: [98, 22] },
    { name: "enex", desktopSize: [82, 26], mobileSize: [69, 22] },
    { name: "enaex", desktopSize: [112, 32], mobileSize: [77, 22] },
    { name: "bayer", desktopSize: [47, 47], mobileSize: [39, 39] },
    { name: "supermercados", desktopSize: [112, 26], mobileSize: [95, 22] },
    { name: "centria", desktopSize: [99, 28], mobileSize: [77, 22] },
    { name: "banmedica", desktopSize: [97, 26], mobileSize: [82, 22] },
    { name: "goldfields", desktopSize: [73, 45], mobileSize: [57, 35] },
    { name: "poderjudicial", desktopSize: [75, 57], mobileSize: [51, 39] },
    { name: "clinica", desktopSize: [108, 28], mobileSize: [85, 22] },
    { name: "copeinca", desktopSize: [123, 26], mobileSize: [104, 22] },
    { name: "consalud", desktopSize: [87, 26], mobileSize: [73, 22] },
    { name: "sanfernando", desktopSize: [60, 40], mobileSize: [57, 38] },
    { name: "pesquera", desktopSize: [124, 34], mobileSize: [88, 24] },
    { name: "antofagasta", desktopSize: [160, 45], mobileSize: [117, 33] },
    { name: "cial", desktopSize: [47, 47], mobileSize: [39, 39] },
    {
        name: "promart", desktopSize: [144, 46], mobileSize: [109, 35]
    },
]
</script>
<template>
    <div class="flex flex-col gap-[48px] xl:pb-[88px] pb-[56px] w-full xl:px-[140px] px-4  mx-auto bg-white">
        <slot name="header" />
        <NuxtMarquee>
            <BrandLogo :logo="brandLogo" v-for="brandLogo in brands" class="ml-[88px]" />
        </NuxtMarquee>
        <slot name="footer" />
    </div>
</template>