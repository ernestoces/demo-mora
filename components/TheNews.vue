<script setup lang="ts">
const query = groq`*[_type == "article"][0..3] {
    "cover": cover.asset,
    content,
    title,
    "slug": slug.current
}`

type Article = {
    cover: {
        _ref: string
    };
    content: any
    title: string;
    slug: string;
};

const { data: articles } = useLazySanityQuery<Article>(query)
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
            <div v-for="article in articles"
                class="xl:pr-[41px] pb-[48px] xl:pb-0 last-of-type:pr-0 last-of-type:border-none xl:border-r-[1px]  xl:border-b-0 border-b-[1px] border-purple border-opacity-50 ">
                <div>
                    <SanityImage class="w-full xl:w-[332px] xlh-[189px]" :asset-id="article.cover._ref"
                        alt="blog cover" />
                </div>
                <div class="mt-[16px] flex flex-col gap-[8px] max-w-[332px] w-full">
                    <h4 class=" font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                        {{ article.title }}
                    </h4>
                    <div class="max-h-[126px] overflow-y-hidden text-dark">
                        <SanityContent :blocks="article.content" />
                    </div>
                </div>
                <NuxtLink :to="'/novedades/noticias/' + article.slug" class="text-mora font-bold cursor-pointer">
                    Seguir
                    leyendo</NuxtLink>
            </div>
        </div>

        <NuxtLink to="/novedades"
            class="font-raleway font-semibold text-base leading-[27px] -tracking-[1%] text-mora border-2 rounded-[3px] p-[8px_22px] border-mora mx-auto block mt-[8px] xl:mt-[64px] w-full xl:max-w-[251px]">
            Ver
            más noticias y eventos</NuxtLink>
    </div>
</template>