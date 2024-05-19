<template>
    <div class="flex flex-col max-w-[1160px] mx-auto justify-start">
        <nuxt-icon name="logoaa" filled class=" text-[72px] self-start  leading-0 shrink-0 m-0 mb-6 " height="144px" />
        <div class="flex gap-[40px] xl:mt-0 mt-[36px] xl:flex-row flex-col">
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
            <div class="xl:w-[542px] xl:h-[307px] shrink-0 w-full">
                <img :src="'./automatice.png'" width="542px" height="307px" alt="a laptop">
            </div>
        </div>
    </div>
</template>

<style>
.nuxt-icon svg {
    margin: 0;
}
</style>