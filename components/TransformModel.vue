<script setup lang="ts">
const transformations = [
    { icon: "cloud", heading: `Una plataforma conectada e inteligente.`, description: `Una única plataforma basada en IA que abarca desde la detección hasta la orquestación, la gestión corporativa y mucho más.` },
    { icon: "remote", heading: `Integrado en su tecnología y sus equipos.`, description: `Conectores para sistemas y aplicaciones centrales, y automatización integrada en el lugar en el que trabajan sus equipos.` },
    { icon: "deploy", heading: `Escalabilidad de confianza.`, description: `Acelere la innovación con una arquitectura nativa en la nube y un ecosistema hecho para el éxito.` },
]
</script>

<template>
    <div class="mt-[151px]">
        <h2 class="font-bold font-montserrat text-[52px] leading-[63px] text-center text-[#333333]">Transforme su
            modelo operativo.

        </h2>
        <div
            class="mt-[50px] bg-white shadow-custom flex gap-[34px] max-w-[1242px] mx-auto px-[60px] py-[50px] rounded-[20px]">
            <div v-for="transformation in transformations" class="flex gap-[20px] items-start">
                <nuxt-icon :name="transformation.icon" filled class="m-0 text-[80px]" />
                <div class="flex flex-col gap-[15px] max-w-[246px]">
                    <h6 class="font-medium font-montserrat text-[24px] leading-[29px] text-[#133A65]"
                        v-text="transformation.heading">
                    </h6>
                    <p class="font-normal font-montserrat text-[18px] leading-[21px] text-[aaBlack]"
                        v-text="transformation.description">
                    </p>
                </div>
            </div>
        </div>
        <h2 class="font-bold font-montserrat text-[52px] leading-[63px] mt-[100px] text-center text-[#333333]">Con una
            plataforma
            completa e inteligente.
        </h2>
        <p
            class="font-normal font-montserrat mt-[10px] text-[#333333] text-center text-[20px] leading-[24px] max-w-[1063px] mx-auto">
            Automation
            Success
            Platform
            acelera la transformación con
            automatización nativa en la nube flexible
            respaldada por una comunidad global de miembros y un ecosistema de socios.</p>
        <div class="w-[928px] h-[610px] mx-auto pt-[50px]">
            <NuxtImg preload :src="'./platform.png'" class="object-cover" alt="process diagram" />
        </div>
    </div>
</template>

<style scoped>
.shadow-custom {
    /* Customize the shadow using Tailwind utilities */
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.2);
}
</style>