<script setup lang="ts">
const postCategory = [
    {
        title: "Cómo la Automatización Inteligente prepara a los negocios",
        content: `La Automatización Inteligente, combinando la potencia de la inteligencia
artificial, el aprendizaje automático y la automatización de procesos, permite a
las empresas optimizar sus operaciones, liberar recursos y tomar`
    },
    {
        title: "¿Qué revela la fusión de la IA y RPA sobre el futuro de la",
        content: `Hoy en día, hacer las cosas de manera eficiente es clave en los negocios. Al
combinar la Inteligencia Artificial (IA) con la Automatización Robótica de
Procesos (RPA), las empresas están logrando grandes avances`
    },
    {
        title: "Nueva tecnología de Automation Anywhere está revolucionando...",
        content: `Automation Anywhere, líder mundial en automatización de procesos
empresariales que integra la inteligencia artificial en todos los aspectos de una
organización, ha anunciado su última innovación: la primera`
    },
]
</script>

<template>
    <div class="bg-white px-[140px] pb-[88px]">
        <div class="max-w-[1160px] mx-auto">
            <h3 class="font-montserrat font-semibold text-[22px] leading-[26px] -tracking-[1%] text-dark">Todas las
                Noticias y Eventos</h3>
            <ul v-for="n in 3" class="mt-[48px] flex">
                <li class="flex flex-col first:pl-0 last:border-0 px-[41px] border-r-[1px] border-purple border-opacity-50"
                    v-for="post in postCategory">
                    <div class="max-w-[332px] h-[189px] shrink-0 ">
                        <img class="object-cover" :src="'./blogCover.png'" alt="blog cover">
                    </div>
                    <h4 class="mt-[16px] font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                        {{
                            post.title }}</h4>
                    <p class=" mt-[8px] font-raleway text-base leading-[21px]">{{ post.content }} ... <span
                            class="text-mora font-bold cursor-hover">Seguir leyendo</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>