<template>
    <div
        class="xl:flex-row flex-col flex gap-[40px] px-4 xl:px-[140px] xl:py-[88px] py-[32px] justify-center xl:pb-[189px] w-full max-w-[1160px] mx-auto">
        <div class="flex flex-col gap-[24px] shrink-0 xl:w-[589px] xl:mx-0 mx-auto">
            <div class="xl:w-[107px] xl:h-[109px] w-[108px] h-[111px] xl:absolute xl:left-[700px] order-2">
                <NuxtImg :src="'./sello.png'" class="object-contain" />
            </div>
            <h1 class="font-montserrat font-bold text-[50px] leading-[60px] text-white">Descubre <br
                    class="hidden xl:block" /><span class="text-mora">Quiénes Somos</span></h1>
            <div class=" flex flex-col gap-[20px]">
                <p class="font-raleway  text-[18px] leading-[21px] font-normal text-white">Mora Technology
                    opera como
                    Automation
                    Anywhere
                    en Perú y Chile. En este 2024, hemos logrado el reconocimiento <NuxtLink href="/vsp-mora.pdf"
                        target="_blank" class="underline text-lightPurple font-semibold">Verified Service Partner
                        (VSP)</NuxtLink>, que
                    certifica
                    nuestra amplia experiencia en implementación de proyectos de automatización inteligente para
                    empresas en
                    toda LATAM.</p>
                <p class="font-raleway text-[18px] leading-[21px] font-normal text-white">Somos una consultora líder en
                    automatización y datos, especializada en implementar soluciones de RPA
                    e inteligencia artificial para optimizar procesos empresariales. <span class="font-semibold">Nuestro
                        objetivo es liberar a
                        las
                        personas de tareas rutinarias y permitirles abordar desafíos empresariales analíticos</span></p>
            </div>
        </div>
        <div class="x:lw-[531px] xl:h-[358px] shrink-0 ">
            <NuxtImg :src="'./discoverWhoWeAre.png'"
                class="xl:w-[531px] xl:h-[358px] w-full h-[222px] rounded-[5px] object-cover"
                alt="photo of a group of people siting around a desk through a glassdoor inside an office space" />
        </div>
    </div>
</template>