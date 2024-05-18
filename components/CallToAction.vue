<script setup lang="ts">
defineProps<{
    light: boolean
}>()
</script>

<template>
    <div v-if="!light"
        class="xl:h-[468px] w-full mx-auto xl:bg-center bg-right-bottom bg-no-repeat bg-black relative overflow-hidden">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
            <source :src="'./video.mp4'" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="xl:p-[148px_246px] relative z-10 p-[112px_24px]">
            <h2
                class="font-montserrat font-bold text-[33px] leading-[40px] text-white text-left xl:text-center max-w-[949px] mx-auto">
                Acelera el Éxito con nuestra<br /> Automatización Inteligente</h2>
            <button
                class="xl:max-w-[197px] w-full font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-white bg-mora rounded-[3px] p-[8px_22px] drop-shadow-[1px_1px_3px_0px_rgba(66,53,100,0.38)] block mx-auto mt-[48px]">¡Contáctanos
                Ahora!</button>
        </div>

    </div>
    <div v-else>
        <div class="max-w-[949px] mx-auto">
            <h2
                class="font-montserrat font-bold text-[33px] leading-[40px] text-[#133a65] text-center max-w-[949px] mx-auto">
                Acelera el Éxito con nuestra Automatización Inteligente</h2>
            <button
                class="font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-white bg-[#FF5A10] rounded-full p-[8px_22px] drop-shadow-[1px_1px_3px_0px_rgba(66,53,100,0.38)] block mx-auto mt-[48px]">Contáctanos
                Ahora</button>
        </div>
    </div>
</template>