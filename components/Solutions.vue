<script setup lang="ts">
const industries = ref([
    { highlightedClients: ["interbank", "financiera", "interseguro", "bcp", "pichincha", "itau", "banchile"], label: "banca", cover: "./banca.png", heading: "Automatización inteligente para servicios financieros", description: `Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.`, ctaUrl: `/` },

    { highlightedClients: ["goldfields", "antofagasta"], label: "minería", cover: "./mineria.png", heading: "Automatización Inteligente para la Industria Minera", description: `<p>Revolucionamos la industria minera al abordar los desafíos en todas las etapas de la cadena de valor. Desde la optimización de los procesos hasta la gestión eficiente de la logística, nuestra tecnología transforma los procesos mineros para <span class="font-bold">aumentar la eficiencia y la seguridad.</span></p>`, ctaUrl: `/` },

    {
        highlightedClients: ["consalud", "banmedica", "bayer", "clinica"], label: "salud", cover: "./salud.png",
        heading: "Automatización inteligente para la Atención Sanitaria",
        description: `<p>La automatización inteligente impulsa la transformación digital en el sector de la atención médica, capacitando a las organizaciones para adaptarse, aumentar su capacidad y abordar los desafíos en toda la cadena de valor de los servicios médicos.</p>`, ctaUrl: `/`
    },

    { highlightedClients: ["copeinca", "enex", "aceros", "gloria", "centria", "pesquera"], label: "manufactura", heading: "Automatización inteligente para la Fabricación", cover: "./manufactura.png", description: `<p>Confía en nuestra tecnología para automatizar tus procesos y operaciones en la industria. Al eliminar errores y desperdicios, reducimos costos y aceleramos tu entrada al mercado,<span class="font-bold">manteniéndote competitivo en un entorno cambiante.</span></p>`, ctaUrl: `/` },

    { highlightedClients: ["inretail", "mass", "supermercados", "makro", "oechsle", "promart"], label: "retail", cover: "./retail.png", heading: "Automatización inteligente para el Comercio", description: `<p>Desde la gestión de inventarios hasta la seguridad en tienda, optimizamos procesos para impulsar las ventas y la lealtad del cliente. <span class="font-bold">Reforzamos la seguridad y prevenimos pérdidas</span> con monitoreo inteligente y alertas ante actividades sospechosas.</p>`, ctaUrl: `/` },
])
const currentIndustryIndex = ref(0)
const centerAligned = ref("items-start")
const currentIndustry = computed(() => industries.value[currentIndustryIndex.value])
</script>

<template>
    <section class="py-[56px] xl:py-[80px] px-4 xl:[px-[24px]  bg-white" id="industrias">
        <div class=" mx-auto xl:max-w-[1160px]">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-center xl:text-left text-dark">
                        Soluciones
                        por
                        Industria <span class="capitalize hidden xl:inline-block"
                            v-text="' - ' + currentIndustry.label" />
                    </h2>
                    <ul class="flex flex-wrap mt-[24px] items-center xl:justify-start justify-center">
                        <li class="capitalize cursor-pointer " v-for="(industry, index) in industries"
                            :key="industry.label" @click="currentIndustryIndex = index">
                            <h4 class="text-dark font-montserrat font-semibold text-[18px] leading-[24px] rounded-full p-[8px_20px] hover:bg-lightPurple hover:text-white"
                                :class="[{ ['bg-purple text-white']: index === currentIndustryIndex }]">
                                {{ industry.label }}</h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex xl:flex-row flex-col xl:gap-[48px] gap-[24px] xl:mt-[40px] mt-[24px]">
                <div class="max-w-[591px] max-h-[352px] w-full shrink-0 ">
                    <NuxtImg preload class="object-cover" :src="currentIndustry.cover" width="591" height="352"
                        alt="image of a selected industry in action" />
                </div>
                <div :class="[{ [centerAligned]: currentIndustryIndex === 0 }]"
                    class="flex flex-col gap-[16px] items-start xl:pt-[65px]">
                    <h3 class="text-dark max-w-[521px] w-full font-montserrat font-semibold text-[22px] leading-[26px]
                    -tracking-[1%] mx-auto mt-[8px] xl:mt-0 xl:text-left">
                        {{ currentIndustry.heading }}
                    </h3>
                    <p class="text-dark font-raleway text-base font-normal leading-[21px] mx-auto xl:text-left"
                        v-html="currentIndustryIndex ? currentIndustry.description : `Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class='font-bold'>sin dejar de cumplir con los requisitos normativos</span> en constante cambio.`" />
                    <NuxtLink :to="'/industrias/' + currentIndustry.label"
                        class="text-center mt-[8px] border-[2px] border-mora text-mora p-[8px_22px] font-raleway font-semibold leading-[27px] text-base -tracking-[1%] rounded-[3px] xl:w-auto  w-full">
                        Conoce más</NuxtLink>
                </div>
            </div>
            <marquee-carousel v-if="currentIndustry.highlightedClients.length > 2" class="xl:mt-[40px] mt-[24px]"
                :images="currentIndustry.highlightedClients" />
            <div v-else class="flex gap-[48px] h-full justify-center xl:justify-end mt-[40px]">
                <div v-for="(image, index) in currentIndustry.highlightedClients" class="py-[10]">
                    <NuxtImg preload :key="image" :src="'./' + image + '.png'" :alt="'Image ' + (index + 1)"
                        class="object-cover h-[47px]" />
                </div>
            </div>
        </div>
    </section>
</template>