<template>
    <div class="bg-dark py-[88px] px-[140px]">
        <div class="max-w-[1160px] flex gap-[48px]">
            <div class="w-[500px] h-[368px] shrink-0">
                <img :src="'./automation.png'" alt="people discussing over a laptop" class="object-cover">
            </div>
            <div class="flex flex-col">
                <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-white">¿Qué es la <span
                        class="text-mora">
                        Automatización Inteligente?
                    </span>
                </h2>
                <p class="font-raleway text-base leading-[21px] text-white mt-[24px]">La Automatización Inteligente
                    fusiona la
                    inteligencia artificial con tecnologías de automatización
                    robótica de procesos. Esta combinación permite una rápida automatización completa de los procesos
                    empresariales, garantizando ejecuciones continuas, libres de errores y a una gran velocidad y
                    escala, sin requerir esfuerzos adicionales.</p>
                <ul class="mt-[40px] flex gap-[40px] py-[16px] px-[62px] bg-[#372B4780] rounded-[5px]">
                    <li class="flex flex-col items-center">
                        <nuxt-icon name="lightbulb" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Inteligencia Artificial
                        </p>
                    </li>
                    <small
                        class="font-raleway font-semibold text-[22px] leading-[26px]  -tracking-[1%] text-white">+</small>
                    <li class="flex flex-col items-center">
                        <nuxt-icon name="cursor" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Tecnología de
                            Automatización</p>
                    </li>
                    <small
                        class="font-raleway font-semibold text-[22px] leading-[26px]  -tracking-[1%] text-white">=</small>
                    <li class="flex flex-col items-center">
                        <nuxt-icon name="smile" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Automatización
                            Inteligente</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>