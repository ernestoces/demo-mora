<script setup lang="ts">
const route = useRoute()
const query = groq`*[_type == "article" && slug.current == $slug][0] {
    "cover": cover.asset->url,
    content,
    title,
    "slug": slug.current
}`

type Article = {
    cover: string;
    content: any
    title: string;
    slug: string;
};

const { data } = await useSanityQuery<Article>(query, { slug: route.params.id })
</script>

<template>
    <article>
        <div class="bg-dark xl:py-[88px] pt-[32px] pb-[56px] px-4">
            <div
                class="flex xl:flex-row flex-col xl:gap-[48px] gap-[24px] max-w-[1160px] mx-auto items-center relative">
                <div class="flex flex-col gap-[24px]">
                    <h4
                        class="xl:block absolute top-0 font-montserrat font-semibold text-[18px] leading-[24px] text-lightPurple">
                        Noticia </h4>
                    <h1
                        class="font-montserrat font-semibold xl:text-[50px] text-[33px] xl:leading-[60px] leading-[40px] text-white ">
                        ¿Qué
                        revela la
                        fusión de
                        la IA y
                        RPA
                        sobre el futuro de la eficiencia
                        empresarial?</h1>
                    <div class="flex gap-[24px]">
                        <p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Juan Perez</p>
                        <span class="font-raleway font-normal text-[18px] leading-[21px] text-lightPurple">15 de marzo
                            de
                            2024</span>
                    </div>
                </div>
                <div class="shrink-0 xl:w-[485px] xl:h-[315px] pt-[48px] -order-1">
                    <NuxtImg preload :src="'./laptop.png'" alt="image of a laptop" />
                </div>
            </div>
        </div>
        <div class="bg-white pt-[64px] xl:pb-[88px] xl:px-[140px] py-[56px] px-4">
            <div class="flex xl:flex-row flex-col xl:gap-[80px] gap-[56px]  max-w-[1160px] mx-auto">
                <SanityContent :blocks="data.content" />
                <div class="flex flex-col xl:w-[324px] shrink-0">
                    <h3 class="font-montserrat font-semibold text-[22px] leading-[26px]">Recomendaciones</h3>
                    <div class="mt-[23px] flex flex-col space-y-[48px]">
                        <div class="w-full" v-for="article in ['seminario', 'automatizacion']">
                            <NuxtImg class="w-full" :src="'./' + article + '.png'" />
                            <h4 class="mt-4 font-montserrat font-semibold text-[18px] leading-[24px]">Seminario Web:
                                Automatización AI en la Práctica</h4>
                            <p class="mt-[8px] font-raleway font-normal text-base leading-[21px]">Únete a nuestro
                                seminario web para
                                explorar cómo la automatización con
                                inteligencia artificial está transformando la forma en que hacemos negocios. Desde la
                                automatización de tareas repetitivas hasta la mejora de la precisión...<a
                                    :href="'/novedades/noticias/' + article" class="font-bold text-mora"> Seguir
                                    leyendo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CallToAction />
    </article>
</template>

<style>
html,
body,
* {
    color: '#18131E'
}
</style>