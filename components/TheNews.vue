<script setup lang="ts">
const news = ref([
    { image: "./seminario.png", heading: "Seminario Web: Automatización AI en la Práctica", description: "Únete a nuestro seminario web para explorar cómo la automatización con inteligencia artificial está transformando la forma en que hacemos negocios. Desde la automatización de tareas repetitivas hasta la mejora de la precisión" },
    {
        image: "./negocios.png", heading: `Cómo la Automatización Inteligente
prepara a los negocios`, description: `La Automatización Inteligente, combinando la potencia de la inteligencia artificial, el aprendizaje automático y la automatización de procesos, permite a
las empresas optimizar sus operaciones, liberar recursos y tomar`
    },
    {
        image: "./ai.png", heading: `¿Qué revela la fusión de la IA y RPA
sobre el futuro de la`, description: `Hoy en día, hacer las cosas de manera eficiente es clave en los negocios. Al
combinar la Inteligencia Artificial (IA) con la Automatización Robótica de
Procesos (RPA), las empresas están logrando grandes avances.`
    },
])
</script>

<template>
    <div class="bg-white pt-[56px] xl:py-[88px] pb-[55px] px-4">
        <p class="font-raleway font-bold text-[33px] leading-[38px] xl:text-center text-left text-dark">Últimas
            Novedades</p>
        <p
            class="text-dark pt-[24px] w-full max-w-[949px] mx-auto font-raleway text-[18px] leading-[21px] xl:text-center text-left">
            Mantente
            al día con
            nuestras
            últimas noticias y
            eventos. Descubre cómo estamos innovando y participando en la
            comunidad empresarial.</p>

        <div class="mt-[56px] xl:flex-row flex flex-col gap-[41px] w-full justify-center">
            <div v-for="article in news"
                class="xl:pr-[41px] pb-[48px] xl:pb-0 last-of-type:pr-0 last-of-type:border-none xl:border-r-2  xl:border-b-0 border-b-2 border-purple border-opacity-50">
                <div><img :src="article.image" alt="" width="332" height="189"></div>
                <div class="mt-[16px] flex flex-col gap-[8px] max-w-[332px] w-full">
                    <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-dark">{{ article.heading }}
                    </h4>
                    <p class="font-raleway text-base leading-[21px] text-dark">{{ article.description + "..." }}<span
                            class="text-mora font-bold cursor-pointer">Seguir leyendo</span></p>
                </div>
            </div>
        </div>

        <button
            class="font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-mora border-2 rounded-[3px] p-[8px_22px] border-mora mx-auto block mt-[8px] xl:mt-[64px] w-full xl:max-w-[251px]">Ver
            más noticias y eventos</button>
    </div>
</template>