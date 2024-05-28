<script setup lang="ts">
const query = groq`*[_type == "article"] | order(_createdAt desc){
    "cover": cover.asset,
    content,
    title,
    "slug": slug.current
}`

type Article = {
    cover: {
        _ref: string
    }
    content: any
    title: string;
    slug: string;
};

const { data } = useLazySanityQuery<Article>(query)
</script>

<template>
    <div class="bg-white xl:px-[140px] pb-[88px]" v-if="data">
        <div class="max-w-[1160px] mx-auto">
            <h3 class="hidden xl:block font-montserrat font-semibold text-[22px] leading-[26px]  text-dark">
                Todas las
                Noticias y Eventos</h3>
            <ul
                class="xl:mt-[48px] xl:divide-x grid xl:grid-cols-3 grid-cols-1 px-4 xl:max-w-[1160px] xl:flex-wrap gap-y-[56px] xl:gap-y-[72px]">
                <li class="newsPreview basis-1/3 grow-0 shrink-0  pb-[48px] xl:pb-0 border-b-[1px] pt-[48px] xl:pt-0 xl:border-b-0 last:border-b-0 flex flex-col  pl-0 xl:last:border-0 xl:px-[41px] xl:pr-[41px]  xl:border-r-[1px] border-b-purple border-r-purple border-opacity-25 "
                    v-for="article in data" :key="article.slug">

                    <div class="imageContainer rounded-[5px]  w-full shrink-0">
                        <SanityImage class="object-cover rounded-[2%] w-full" :asset-id="article.cover._ref"
                            alt="blog cover" />
                    </div>
                    <h4
                        class="xl:max-w-[324px] line-clamp-2 mt-[16px] font-montserrat font-semibold text-[18px] leading-[24px] text-dark">
                        {{
                            article.title }}</h4>
                    <p
                        class=" xl:max-w-[324px]  font-normal font-raleway text-base text-dark leading-[21px] h-[126px] overflow-y-hidden inline-flex flex-col">
                        <SanityContent :blocks="article.content" />
                        <span>...</span>
                    </p>

                    <NuxtLink :to="'/novedades/noticias/' + article.slug" class="text-mora font-bold cursor-hover">
                        Seguir
                        leyendo</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
.novedades .newsPreview:nth-child(4n+1) {
    display: none;
}

.newsPreview:nth-child(4n+2) {
    border-left: none
}

.newsPreview:nth-child(4n+3) {
    border-right: none
}

.imageContainer img {
    border-radius: 5px
}
</style>