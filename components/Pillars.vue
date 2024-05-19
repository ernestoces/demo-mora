<script setup lang="ts">
const pillars = ref([
    {
        icon: "telescope",
        heading: "Nuestra Visión",
        description: `Liderar regionalmente la eficiencia en los procesos empresariales y mejorar los resultados de las organizaciones mediante la hiperautomatización.`
    },
    {
        icon: "rocket",
        heading: "Nuestra Misión",
        description: `Brindar a nuestros clientes la mejor experiencia y resultados en su viaje hacia la hiperautomatización.`
    },
    {
        icon: "purpose",
        heading: "Nuestro Propósito",
        description: `Transformar la forma en que las personas y las organizaciones operan, integrando la tecnología y la automatización en sus actividades diarias.`
    },
    {
        icon: "values",
        heading: "Nuestros Valores",
        description: `Nos guiamos por el respeto, la integridad, el trabajo en equipo, la innovación, la pasión y la responsabilidad en todo lo que hacemos.`
    },
])
</script>

<template>
    <section class="bg-white xl:py-[88px] py-[56px]">
        <div class="max-w-[1160px] mx-auto">
            <h2 class="text-center mx-auto font-montserrat font-bold text-[33px] leading-[40px]">Conoce Nuestros Pilares
            </h2>
            <div class="flex xl:flex-row flex-col items-center xl:gap-[33px] gap-[24px] xl:mt-[48px] mt-[32px] px-4">
                <div v-for="pillar in pillars"
                    class=" bg-gradient-to-r hover:from-[#B8A2D633] hover:to-[#5820E733] hover:border-white border border-lightPurple w-full xl:w-[265px] p-[24px] flex flex-col xl:gap-[56px] gap-[30px] rounded-[5px] cursor-default">
                    <div class="flex gap-[16px]">
                        <nuxt-icon :name="pillar.icon" filled class="text-[40px]" />
                        <h4
                            class="xl:max-w-[134px] w-full font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                            {{
                                pillar.heading
                            }}
                        </h4>
                    </div>
                    <p class="font-raleway font-normal text-base leading-[21px] text-dark">{{ pillar.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>