<template>
    <div class="bg-white xl:px-[140px] px-4 xl:pt-[88px] pt-[56px] pb-[72px]">
        <div class="flex flex-col xl:gap-[47px] gap-[32px] max-w-[1160px] mx-auto">
            <h3 class="font-montserrat font-semibold text-[22px] leading-[27px] -tracking-[1%] text-dark">Lo Último</h3>
            <div class="flex gap-[48px] xl:flex-row flex-col">
                <div class="shrink-0 xl:w-[485px] xl:h-[315px]">
                    <NuxtImg :src="'./newsCover.png'" alt="highlighted news cover" />
                </div>
                <div class="flex flex-col  items-start">
                    <h4 class="font-montserrat font-semibold text-[18px] leading-[24px] text-mora">Evento</h4>
                    <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-dark mt-[8px]">Seminario Web:
                        Automatización AI en la Práctica</h2>
                    <p class="mt-[16px] font-raleway font-normal text-[18px] leading-[21px] text-dark">Únete a nuestro
                        apasionante seminario web para explorar cómo la automatización con
                        inteligencia artificial está transformando radicalmente la forma en que hacemos negocios en la
                        era digital. Desde simplificar tareas repetitivas hasta mejorar la precisión y velocidad en la
                        toma de decisiones, descubre cómo la tecnología está revolucionando los...</p>
                    <button
                        class="flex gap-[8px] items-center border-mora border-[3px] rounded-[3px] p-[8px_22px] mt-[32px] xl:w-auto w-full justify-center"><span
                            class="text-mora font-raleway font-semibold text-base leading-[27px] -tracking-[1%]">Ver
                            más</span><nuxt-icon name="chevronRight" filled /></button>
                </div>
            </div>
        </div>
    </div>
</template>