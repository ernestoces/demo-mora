<script setup lang="ts">
interface Item {
    icon: string | null,
    heading: string,
    description: string
}

interface Product {
    id: number,
    name: string,
    description: string,
    image: string
    items: Item[],
}

defineProps<{
    product: Product
}>()
</script>

<template>

    <div
        class="shadowed z-10 snap-always snap-center xl:max-w-[1219px] xl:min-h-[645px] w-full shrink-0 xl:pt-[50px] pt-[30px] xl:px-[70px] px-[15px] xl:pb-[50px] pb-[30px] rounded-[20px] ">
        <p class="font-semibold font-montserrat text-[24px] leading-[32px] text-[#133A65] text-center ">{{
            product.name }}</p>
        <p class="mt-[20px] text-center font-montserrat font-normal text-[18px] leading-[24px] text-[#333333]">{{
            product.description }}</p>
        <div class="flex gap-[40px] items-center xl:flex-row flex-col">
            <ul class="mt-[40px] xl:gap-[32px] gap-[40px] flex flex-col max-w-[505px]">
                <li v-for="item in product.items"
                    class="flex xl:flex-row flex-col items-center xl:gap-[25px] xl:items-start">
                    <div v-if="item.icon" class="shrink-0 h-[72px] w-[72px]">
                        <NuxtImg :src="item.icon" class="object-cover" height="72px" />
                    </div>
                    <div class="flex flex-col xl:space-y-[10px] space-y-[15px]">
                        <p
                            class="font-semibold font-montserrat text-[18px] leading-[24px] text-center xl:text-left text-[#333333]">
                            {{
                                item.heading
                            }}
                        </p>
                        <p
                            class="font-montserrat font-normal text-base leading-[21px] text-[#333333] text-center xl:text-left">
                            {{
                                item.description }}
                        </p>
                    </div>
                </li>
            </ul>
            <div v-if="product.image.includes('youtube')">
                <iframe width="560" height="315" class="w-full xl:w-[554px] xl:h-[312px] h-[165px]"
                    src="https://www.youtube.com/embed/yTcV7_ghJHc?si=ZvUr6GfLcPF5SaPI" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; clipboard-writ; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div v-else class="w-full min-w-[239px]">
                <NuxtImg :src="product.image" alt="" class="object-cover " />
            </div>
        </div>
    </div>
</template>

<style>
.shadowed {
    box-shadow: 0px 20px 80px 0px #00000033;
}
</style>
