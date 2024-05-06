<script setup lang="ts">
const industries = [
    { label: "banca", cover: "./banca.png", heading: "Automatización inteligente para servicios financieros", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
    { label: "minería", cover: "./mineria.png", heading: "Automatización Inteligente para la Industria Minera", description: `<p>Revolucionamos la industria minera al abordar los desafíos en todas las etapas de la cadena de valor. Desde la optimización de los procesos hasta la gestión eficiente de la logística, nuestra tecnología transforma los procesos mineros para <span class="font-bold">aumentar la eficiencia y la seguridad.</span></p>`, ctaUrl: `/` },
    { label: "salud", cover: "./salud.png", heading: "Automatización inteligente para la atención sanitaria", description: `<p>Revitalizamos la atención sanitaria al abordar los desafíos en todas las etapas de la cadena de valor. Desde la gestión de pacientes hasta la optimización de procesos clínicos, nuestra tecnología transforma la atención médica para <span class="font-bold">aumentar la eficiencia y mejorar</span> la experiencia del paciente.</p>`, ctaUrl: `/` },
    { label: "manufactura", heading: "Automatización inteligente para la fabricación", cover: "./manufactura.png", description: `<p>Confía en nuestra tecnología para automatizar tus procesos y operaciones en la industria. Al eliminar errores y desperdicios, reducimos costos y aceleramos tu entrada al mercado,<span class="font-bold">manteniéndote competitivo en un entorno cambiante.</span></p>`, ctaUrl: `/` },
    { label: "retail", cover: "./retail.png", heading: "Automatización inteligente para el comercio", description: `<p>Desde la gestión de inventarios hasta la seguridad en tienda, optimizamos procesos para impulsar las ventas y la lealtad del cliente. <span class="font-bold">Reforzamos la seguridad y prevenimos pérdidas</span> con monitoreo inteligente y alertas ante actividades sospechosas.</p>`, ctaUrl: `/` },
]

const currentIndustryIndex = useState('currentIndustryIndex', () => 0)
const textCenter = ref("text-center")
</script>

<template>
    <section class="pt-[80px] px-[24px] max-w-[1160px] mx-auto">
        <h3 class="font-montserrat font-bold text-[33px] leading-[40px]">Soluciones por Industria</h3>
        <ul class="flex mt-[24px]">
            <li class="capitalize cursor-pointer" v-for="(industry, index) in industries"
                @click="currentIndustryIndex = index">
                <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] rounded-full p-[8px_20px]"
                    v-bind:class="{ 'bg-purple text-white': index === currentIndustryIndex }">
                    {{ industry.label }}</h4>
            </li>
        </ul>
        <div class="flex gap-[48px] mt-[40px]">
            <div class="max-w-[591px] max-h-[352px] w-full shrink-0">
                <img class="object-cover" :src="industries[currentIndustryIndex].cover" width="591" height="352"
                    alt="banca">
            </div>
            <div :class="[{ [textCenter]: currentIndustryIndex === 0 }]" class="space-y-[16px]">
                <h3 class="max-w-[521px] w-full font-montserrat font-semibold text-[22px] leading-[26px]
                    -tracking-[1%] mx-auto">
                    {{ industries[currentIndustryIndex].heading }}</h3>
                <p class="font-raleway text-base font-normal leading-[21px] mx-auto"
                    v-html="industries[currentIndustryIndex].description" />
            </div>
        </div>
    </section>
</template>