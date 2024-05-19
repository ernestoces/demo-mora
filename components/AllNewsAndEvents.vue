<script setup lang="ts">
const postCategory = [
    {
        id: "como-la-automatizacion",
        title: "Cómo la Automatización Inteligente prepara a los negocios",
        content: `La Automatización Inteligente, combinando la potencia de la inteligencia
artificial, el aprendizaje automático y la automatización de procesos, permite a
las empresas optimizar sus operaciones, liberar recursos y tomar`
    },
    {
        id: "que-revela-la-fusion",
        title: "¿Qué revela la fusión de la IA y RPA sobre el futuro de la",
        content: `Hoy en día, hacer las cosas de manera eficiente es clave en los negocios. Al
combinar la Inteligencia Artificial (IA) con la Automatización Robótica de
Procesos (RPA), las empresas están logrando grandes avances`
    },
    {
        id: "nueva-tecnologia",
        title: "Nueva tecnología de Automation Anywhere está revolucionando...",
        content: `Automation Anywhere, líder mundial en automatización de procesos
empresariales que integra la inteligencia artificial en todos los aspectos de una
organización, ha anunciado su última innovación: la primera`
    },
]
</script>

<template>
    <div class="bg-white xl:px-[140px] pb-[88px]">
        <div class="max-w-[1160px] mx-auto">
            <h3
                class="hidden xl:block font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark">
                Todas las
                Noticias y Eventos</h3>
            <ul v-for="n in 3" class="xl:mt-[72px] flex xl:flex-row flex-col px-4">
                <li class="pb-[48px] border-b-[1px] pt-[48px] last:border-b-0 flex flex-col first:pt-0 xl:first:pl-0 xl:last:border-0 xl:px-[41px]  xl:border-r-[1px] border-[#372b471e] "
                    v-for="post in postCategory">
                    <div class="xl:max-w-[332px] w-full h-[189px] shrink-0 ">
                        <NuxtImg preload class="object-cover rounded-[3px]" :src="'./blogCover.png'" alt="blog cover" />
                    </div>
                    <h4 class="mt-[16px] font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                        {{
                            post.title }}</h4>
                    <p class="mt-[8px] font-normal font-raleway text-base leading-[21px]">{{ post.content }} ... <a
                            :href="'/novedades/noticias/' + post.id" class="text-mora font-bold cursor-hover">Seguir
                            leyendo</a></p>
                </li>
            </ul>
        </div>
    </div>
</template>