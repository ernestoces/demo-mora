<template>
    <div class="min-h-screen bg-dark">
        <DiscoverWhoWeAre />
        <Pillars />
        <WhatIsSmartAutomation />
        <Brands>
            <template #header>
                <div class="flex flex-col gap-[24px] items-center justify-center xl:pt-[88px] pt-[56px]">
                    <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-dark xl:text-left text-center">
                        ¡Únete a la Automatización!
                    </h2>
                    <p class="font-raleway font-normal text-[18px] leading-[21px] xl:text-left text-center text-dark">
                        Ellos confían en nosotros</p>
                </div>
            </template>
            <template #footer>
                <div>
                    <button
                        class="font-raleway font-semibold text-base leading-[27px] w-full xl:w-auto -tracking-[1%] text-mora py-[8px] px-[22px] rounded-[3px] border-2 border-mora mx-auto block">Conoce
                        más de nuestros servicios</button>
                </div>
            </template>
        </Brands>
        <CallToAction :light="false" />
    </div>
</template>