<script setup lang="ts">
const transformations = ref([
    { icon: "cloud", heading: `Una plataforma conectada e inteligente.`, description: `Una única plataforma basada en IA que abarca desde la detección hasta la orquestación, la gestión corporativa y mucho más.` },
    { icon: "remote", heading: `Integrado en su tecnología y sus equipos.`, description: `Conectores para sistemas y aplicaciones centrales, y automatización integrada en el lugar en el que trabajan sus equipos.` },
    { icon: "deploy", heading: `Escalabilidad de confianza.`, description: `Acelere la innovación con una arquitectura nativa en la nube y un ecosistema hecho para el éxito.` },
])
const modalOpen = ref(false)
</script>

<template>
    <div class="mt-[112px] xl:mt-[151px]">
        <h2
            class="font-bold font-montserrat xl:text-[52px] text-[34px] xl:leading-[63px] leading-[40px] text-center text-[#333333] ">
            Transforme su modelo operativo.
        </h2>
        <div
            class="mt-[50px] bg-white shadow-custom flex xl:flex-row items-center xl:items-start flex-col gap-[34px] max-w-[1242px] mx-auto px-[60px] py-[50px] rounded-[20px]">
            <div v-for="transformation in transformations"
                class="flex gap-[20px] xl:items-start items-center xl:flex-row flex-col">
                <div class="shrink-0">
                    <nuxt-icon :name="transformation.icon" filled class="m-0 text-[80px]" />
                </div>
                <div class="flex flex-col gap-[15px] max-w-[246px]">
                    <h6 class="font-medium font-montserrat text-[24px] leading-[29px] text-[#133A65] xl:text-left text-center"
                        v-text="transformation.heading">
                    </h6>
                    <p class="font-normal font-montserrat text-[18px] leading-[21px] text-[#333333] xl:text-left text-center"
                        v-text="transformation.description">
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col xl:gap-[10px] gap-[30px]">
            <h2
                class="font-bold font-montserrat xl:text-[52px] text-[34px] xl:leading-[63px] leading-[40px] mt-[100px] text-center text-[#333333]">
                Con una plataforma completa e inteligente.
            </h2>
            <p class="font-montserrat text-[20px] leading-[24px] text-center max-w-[1063px] mx-auto text-[#333333]">
                Automation Success
                Platform acelera la transformación con automatización nativa en la nube flexible
                respaldada por una comunidad global de miembros y un ecosistema de socios.</p>
        </div>
        <div class="xl:w-[928px] xl:h-[610px] mx-auto pt-[50px] w-full block relative">
            <NuxtImg :src="'./platform.png'" class="object-cover cursor-pointer" alt="process diagram"
                @click="() => modalOpen = true" />
            <div>
                <UModal v-model="modalOpen" fullscreen class="z-[9999999] bg-white">
                    <div class="xl:w-[1440px] w-full mx-auto py-[56px] px-4 flex flex-col items-start">
                        <p class="mt-[24px] mb-[8px] font-montserrat leading-[41px] text-[24px] font-semibold text-center text-[#133A65] cursor-pointer"
                            @click="() => modalOpen = false">Regresar</p>
                        <NuxtImg :src="'./platform.png'" class="object-cover" alt="process diagram" />
                    </div>
                </UModal>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shadow-custom {
    /* Customize the shadow using Tailwind utilities */
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.2);
}
</style>