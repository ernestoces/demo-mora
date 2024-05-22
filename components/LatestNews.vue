<script setup lang="ts">
const query = groq`*[_type == "article"][0] {
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

const { data: article } = await useSanityQuery<Article>(query)

</script>

<template>
    <div v-show="article" class="bg-white xl:px-[140px] px-4 xl:pt-[88px] pt-[56px] pb-[72px]">
        <div class="flex flex-col xl:gap-[47px] gap-[32px] max-w-[1160px] mx-auto">
            <h3 class="font-montserrat font-semibold text-[22px] leading-[27px] -tracking-[1%] text-dark">Lo Último</h3>
            <div class="flex gap-[48px] xl:flex-row flex-col">
                <div class="shrink-0 xl:w-[485px] xl:h-[315px]">
                    <NuxtImg :src="article.cover" alt="highlighted news cover" />
                </div>
                <div class="flex flex-col  items-start">
                    <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-mora">Evento</h4>
                    <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-dark mt-[8px]">{{ article.title
                        }}
                    </h2>
                    <p
                        class="mt-[16px] max-h-[105px] overflow-y-hidden font-raleway font-normal text-[18px] leading-[21px] text-dark">
                        <SanityContent :blocks="article.content" />
                    </p>
                    <NuxtLink :to="'/novedades/noticias/' + article.slug"
                        class="flex gap-[8px] items-center border-mora border-[3px] rounded-[3px] p-[8px_22px] mt-[32px] xl:w-auto w-full justify-center">
                        <span class="text-mora font-raleway font-semibold text-base leading-[27px] -tracking-[1%]">Ver
                            más</span><nuxt-icon name="chevronRight" filled />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>