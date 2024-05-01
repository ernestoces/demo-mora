<script setup lang="ts">
const industries = [
    { label: "banca", heading: "Automatización inteligente para servicios financieros", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
    { label: "minería", href: "/", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
    { label: "salud", href: "/", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
    { label: "manufactura", href: "/", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
    { label: "retail", href: "/", description: `<p>Con la automatización inteligente, los bancos y las empresas de servicios financieros pueden transformar las operaciones manuales que usan muchos datos, <span class="font-bold">sin dejar de cumplir con los requisitos normativos</span> en constante cambio.</p>`, ctaUrl: `/` },
]

const currentIndustryIndex = useState('currentIndustryIndex', () => 0)
</script>

<template>
    <section>
        <h3>Soluciones por Industria</h3>
        <ul class="flex mt-[24px]">
            <li class="capitalize" v-for="(industry, index) in industries">
                <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] rounded-full p-[8px_20px]"
                    v-bind:class="{ 'bg-purple text-white': index === currentIndustryIndex }">
                    {{ industry.label }}</h4>
            </li>
        </ul>
        <div class="flex gap-[48px] mt-[40px]">
            <div class="shrink-0 max-w-[673px] max-h-[352px] w-full">
                <img class="object-cover" src="./banca.png" alt="banca">
            </div>
            <div>
                <p v-html="industries[currentIndustryIndex].description"></p>
            </div>
        </div>
    </section>
</template>