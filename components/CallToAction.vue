<script setup lang="ts">
defineProps<{
    light: boolean
}>()
</script>

<template>
    <div v-if="!light" class="w-full mx-auto bg-center bg-no-repeat bg-[length:1440px] bg-black"
        v-bind:style="{ 'background-image': 'url(./ctaImage.png)' }">
        <div class="p-[148px_246px]">
            <h2
                class="font-montserrat font-bold text-[33px] leading-[40px] text-white text-center max-w-[949px] mx-auto">
                Acelera el Éxito con nuestra<br /> Automatización Inteligente</h2>
            <button
                class="font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-white bg-mora rounded-[3px] p-[8px_22px] drop-shadow-[1px_1px_3px_0px_rgba(66,53,100,0.38)] block mx-auto mt-[48px]">¡Contáctanos
                Ahora!</button>
        </div>

    </div>
    <div v-else>
        <div class="max-w-[949px] mx-auto">
            <h2
                class="font-montserrat font-bold text-[33px] leading-[40px] text-[#133a65] text-center max-w-[949px] mx-auto">
                Acelera el Éxito con nuestra<br /> Automatización Inteligente</h2>
            <button
                class="font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-white bg-[#FF5A10] rounded-full p-[8px_22px] drop-shadow-[1px_1px_3px_0px_rgba(66,53,100,0.38)] block mx-auto mt-[48px]">Contáctanos
                Ahora</button>
        </div>
    </div>
</template>