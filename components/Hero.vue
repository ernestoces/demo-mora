<template>
    <div
        class="xl:-mt-[70px] -mt-[92px] xl:h-[710px] pb-[56px] min-h-[590px] w-full mx-auto xl:bg-center bg-right-bottom bg-no-repeat bg-black relative overflow-hidden">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
            <source src="~/assets/video/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <div class="max-w-[1160px] w-full max-h-[251px] mx-auto relative z-10">
            <h1
                class="px-4 relative z-10 text-white font-montserrat font-bold text-[33px] leading-[40px] xl:text-[50px] xl:leading-[61px] text-left xl:text-center pt-[112px] xl:pt-[265px]">
                Descubre el potencial de tu empresa con nuestra automatización impulsada por <span
                    class="text-mora">IA</span>.</h1>
            <p
                class="relative font-raleway font-normal text-[18px] leading-[21px] xl:text-center text-left mt-[24px] text-white    px-4">
                Explora cómo podemos llevar tu negocio al siguiente nivel.</p>
            <div class="relative px-4 ">
                <NuxtLink href="/servicios"
                    class="text-center max-w-[297px] font-raleway font-semibold text-base leading-[27px] tracking-tight bg-mora px-[22px] py-[8px]  text-white rounded-[3px] mx-auto block xl:mt-[40px] mt-[48px] w-full xl:w-auto">
                    Conoce
                    más de <span class="hidden xl:inline-block">nuestros servicios</span><span
                        class="xl:hidden inline-block">nosotros</span></NuxtLink>
            </div>
        </div>

    </div>
</template>