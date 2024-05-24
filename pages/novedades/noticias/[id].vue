<script setup lang="ts">
const route = useRoute()
const query = groq`*[_type == "article" && slug.current == $slug][0] {
    "cover": cover.asset,
    content,
    title,
    "slug": slug.current,
    _createdAt
}`

type Article = {
    cover: {
        _ref: string
    };
    content: any
    title: string;
    slug: string;
    _createdAt: string
};
const { data: article } = useLazySanityQuery<Article>(query, { slug: route.params.id })

const recomendedArticlesQuery = groq`*[_type == "article"][0..3] {
    "cover": cover.asset,
    content,
    title,
    "slug": slug.current,
}`

const { data: recommendedArticles } = useLazySanityQuery<Article>(recomendedArticlesQuery)

</script>

<template>
    <article v-if="article">
        <div class="bg-dark xl:py-[88px] pt-[32px] pb-[56px] px-4">
            <div
                class="flex xl:flex-row flex-col xl:gap-[48px] gap-[24px] max-w-[1160px] mx-auto items-center xl:items-start relative">
                <div class="flex flex-col gap-[24px]">
                    <h4 class="xl:block font-montserrat font-semibold text-[18px] leading-[24px] text-lightPurple">
                        Noticia
                    </h4>
                    <h1
                        class="font-montserrat font-semibold xl:text-[50px] text-[33px] xl:leading-[60px] leading-[40px] text-white ">
                        {{ article?.title }}</h1>
                    <div class="flex gap-[24px]">
                        <NuxtTime class="font-raleway font-normal text-[18px] leading-[21px] text-lightPurple"
                            day="numeric" month="long" year="numeric" :datetime="article._createdAt" />
                    </div>
                </div>
                <div class="shrink-0 xl:w-[485px] xl:h-[315px] pt-[48px] ">
                    <SanityImage class="object-cover rounded-[3px] w-full" :asset-id="article.cover._ref"
                        alt="news cover" />
                </div>
            </div>
        </div>
        <div class="bg-white pt-[64px] xl:pb-[88px] xl:px-[140px] py-[56px] px-4">
            <div class="flex xl:flex-row flex-col xl:gap-[80px] gap-[56px] max-w-[1160px] mx-auto">
                <div class="flex flex-col gap-[24px] text-dark">
                    <SanityContent :blocks="article.content" />
                </div>
                <div class="flex flex-col xl:w-[324px] shrink-0">
                    <h3 class="font-montserrat font-semibold text-[22px] leading-[26px]">Recomendaciones</h3>
                    <div class="mt-[23px] flex flex-col space-y-[48px]">
                        <div class="w-full" v-for="article in recommendedArticles">
                            <SanityImage class="object-cover rounded-[3px] w-full" :asset-id="article.cover._ref"
                                alt="news cover" />
                            <h4 class="mt-4 font-montserrat font-semibold text-[18px] leading-[24px]">{{ article.title
                                }}
                            </h4>
                            <div
                                class="flex-col gap-[12px] text-dark mt-[8px] font-raleway font-normal text-base leading-[21px] max-h-[126px] overflow-y-hidden">
                                <SanityContent :blocks="article.content" />
                            </div>
                            <NuxtLink :to="'/novedades/noticias/' + article.slug" class="font-bold text-mora">
                                Seguir
                                leyendo</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CallToAction />
    </article>
</template>

<style scoped>
html,
body,
* {
    color: '#18131E'
}

p {
    display: flex;
    flex-direction: column;
}
</style>