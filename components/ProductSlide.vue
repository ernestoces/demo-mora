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
        class="z-10 snap-always snap-center xl:w-[1219px] w-full shrink-0 xl:pt-[50px] pt-[30px] xl:px-[70px] px-[15px] xl:pb-[139px] pb-[30px] border  rounded-[20px]  shadow-custom">
        <p class="font-semibold font-montserrat text-[24px] leading-[32px] text-[#133A65] text-center">{{
            product.name }}</p>
        <p class="mt-[20px] text-center font-montserrat font-normal text-[18px] leading-[24px]">{{
            product.description }}</p>
        <div class="flex gap-[40px] items-center xl:flex-row flex-col">
            <ul class="mt-[50px] xl:gap-[50px] gap-[40px] flex flex-col">
                <li v-for="item in product.items"
                    class="flex xl:flex-row flex-col items-center xl:gap-[25px] xl:items-start">
                    <div v-if="item.icon">
                        <nuxt-icon :name="item.icon" filled class="text-[72px]" />
                    </div>
                    <div class="flex flex-col xl:space-y-[10px] space-y-[15px]">
                        <p class="font-semibold font-montserrat text-[18px] leading-[24px] text-center xl:text-left">{{
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
            <div>
                <NuxtImg :src="product.image" alt="" />
            </div>
        </div>
    </div>
</template>

<style>
.shadow-custom {
    /* Customize the shadow using Tailwind utilities */
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.2);
}
</style>