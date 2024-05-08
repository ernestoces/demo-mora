<script setup>
const brands = [
    {
        name: "grupotawa",
    },
    {
        name: "enaex"
    },
    {
        name: "poderjudicial"
    },
    {
        name: "consalud"
    },
    {
        name: "sanfernando"
    },
]

</script>

<template>
    <div class="flex flex-col gap-[48px] pb-[180px] w-full px-[140px]  mx-auto bg-white">

        <slot></slot>
        <ul class="h-[96px] flex gap-[88px] items-center max-w-[1160px] justify-center mx-auto">
            <li v-for="brand in brands">
                <nuxt-icon :name="brand.name" class="text-[88px]" filled />
            </li>
        </ul>
    </div>
</template>