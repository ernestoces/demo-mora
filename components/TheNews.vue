<script setup lang="ts">
const query = groq`*[_type == "article"]| order(_createdAt desc)[0..2] {
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
    <div class="bg-white pt-[56px] xl:py-[88px] pb-[55px] px-4 ">
        <div class="max-w-[1160px] mx-auto">
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

            <ul
                class="xl:mt-[48px] grid xl:grid-cols-3 grid-cols-1 px-4 xl:max-w-[1160px] xl:flex-wrap gap-y-[56px] xl:gap-y-[72px]">
                <li class="newsPreview basis-1/3 grow-0 shrink-0  pb-[48px] xl:pb-0 border-b-[1px] pt-[48px] xl:pt-0 xl:border-b-0 last:border-b-0 flex flex-col  pl-0 xl:last:border-0 xl:px-[41px] xl:pr-[41px]  xl:border-r-[1px] border-purple border-opacity-25"
                    v-for="article in articles" :key="article.slug">
                    <div class=" xl:h-[189px] w-full shrink-0 ">
                        <SanityImage class="object-cover rounded-[3px] w-full" :asset-id="article.cover._ref"
                            alt="blog cover" />
                    </div>
                    <h4
                        class="xl:max-w-[324px] line-clamp-2 mt-[16px] font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                        {{
                            article.title }}</h4>
                    <p
                        class="xl:max-w-[324px]  font-normal font-raleway text-base text-dark leading-[21px] h-[126px] overflow-y-hidden inline-flex flex-col">
                        <SanityContent :blocks="article.content" />
                        <span>...</span>
                    </p>

                    <NuxtLink :to="'/novedades/noticias/' + article.slug" class="text-mora font-bold cursor-hover">
                        Seguir
                        leyendo</NuxtLink>
                </li>
            </ul>

            <NuxtLink to="/novedades"
                class="font-raleway font-semibold text-base leading-[27px]  text-mora border-2 rounded-[3px] p-[8px_22px] border-mora mx-auto block mt-[8px] xl:mt-[64px] w-full xl:max-w-[251px]">
                Ver
                más noticias y eventos</NuxtLink>
        </div>
    </div>
</template>