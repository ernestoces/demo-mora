<script setup lang="ts">
const colors = ref({
    base: "#ffffff2e",
})
</script>

<template>
    <div class="flex flex-col max-w-[1160px] mx-auto justify-start">
        <NuxtImg src="./logoaa.png"
            class="self-start xl:w-[176px] xl:h-[64px] w-[165px] h-[60px] leading-0 shrink-0 m-0 mb-6" height="144px" />
        <div class="flex xl:gap-[40px] gap-[20px] xl:mt-0  xl:flex-row flex-col">
            <div class="flex flex-col gap-4 max-w-[578px]">
                <h1
                    class="font-montserrat font-extrabold text-[36px] leading-[42px] xl:text-[72px] xl:leading-[87px] text-aaBlue ">
                    Automatice lo
                    imposible.
                </h1>
                <p class="font-montserrat font-medium text-[21px] leading-[25px] text-aaBlack">Potencie e
                    involucre a
                    sus equipos
                    con un conjunto completo de aplicaciones y herramientas de
                    automatización inteligentes para identificar, transformar y ampliar los procesos empresariales.
                </p>
            </div>
            <div
                class="xl:w-[542px] xl:h-[307px] shrink-0 w-full mt-[10px] xl:-mt-[12px] rounded-tr-[17px] rounded-bl-[17px] overflow-clip">
                <CldVideoPlayer :showLogo="false" :colors="colors" :hideContextMenu="true" width="1920" height="1080"
                    src="gnc3qmz8pp15cqztzl6m" />
            </div>
        </div>
    </div>
</template>

<style>
.nuxt-icon svg {
    margin: 0;
}
</style>