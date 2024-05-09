<template>
    <div class="bg-white px-[140px] py-[88px]">
        <div class="flex flex-col gap-[47px] max-w-[1160px] mx-auto">
            <h3 class="font-montserrat font-semibold text-[22px] leading-[27px] -tracking-[1%]">Lo Último</h3>
            <div class="flex gap-[48px]">
                <div class="shrink-0 w-[485px] h-[315px]">
                    <img :src="'./newsCover.png'" alt="highlighted news cover">
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
                        class="flex gap-[8px] items-center border-mora border-2 rounded-[3px] p-[8px_22px] mt-[32px]"><span
                            class="text-mora font-raleway font-semibold text-base leading-[27px] -tracking-[1%]">Ver
                            más</span><nuxt-icon name="chevronRight" filled /></button>
                </div>
            </div>
        </div>
    </div>
</template>