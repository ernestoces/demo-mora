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
    <section class="bg-white py-[88px]">
        <div class="max-w-[1160px] mx-auto">
            <h2 class="text-center mx-auto font-montserrat font-bold text-[33px] leading-[40px]">Conoce Nuestros Pilares
            </h2>
            <div class="flex gap-[33px] mt-[48px]">
                <div v-for="pillar in pillars"
                    class="border-2 border-lightPurple w-[265px] p-[24px] flex flex-col gap-[56px] rounded-[5px]">
                    <div class="flex gap-[16px]">
                        <nuxt-icon :name="pillar.icon" filled class="text-[40px]" />
                        <h4 class="max-w-[134px] font-montserrat font-semibold text-[18px] leading-[24px] text-dark">{{
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