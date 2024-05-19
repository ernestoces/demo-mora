<template>
    <div
        class=" xl:flex-row flex-col flex gap-[40px] px-4 xl:px-[140px] xl:py-[88px] py-[32px] justify-center pb-[189px]">
        <div class="flex flex-col gap-[24px] max-w-[589px] xl:mx-0 mx-auto">
            <NuxtImg :src="'./sello.png'" width="61px" height="63px" class="absolute right-4" />
            <h1 class="font-montserrat font-bold text-[50px] leading-[60px] text-white">Descubre <span
                    class="text-mora">Quiénes Somos</span></h1>
            <div class=" flex flex-col gap-[20px]">
                <p class="font-raleway  text-[18px] leading-[21px]font-normal text-white">Mora Technology
                    opera como
                    Automation
                    Anywhere
                    en Perú y Chile. En este 2024, hemos logrado el reconocimiento <span
                        class="underline text-lightPurple font-semibold">Verified Service Partner
                        (VSP)</span>, que
                    certifica
                    nuestra amplia experiencia en implementación de proyectos de automatización inteligente para
                    empresas en
                    toda LATAM.</p>
                <p class="font-raleway  text-[18px] leading-[21px]font-normal text-white">Somos una consultora líder en
                    automatización y datos, especializada en implementar soluciones de RPA
                    e inteligencia artificial para optimizar procesos empresariales. <span class="font-semibold">Nuestro
                        objetivo es liberar a
                        las
                        personas de tareas rutinarias y permitirles abordar desafíos empresariales analíticos</span></p>
            </div>
        </div>
        <div class="x:lw-[531px] xl:h-[358px] shrink-0">
            <img :src="'./discoverWhoWeAre.png'" class="w-[531px] h-[358px] object-cover"
                alt="photo of a group of people siting around a desk through a glassdoor inside an office space">
        </div>
    </div>
</template>