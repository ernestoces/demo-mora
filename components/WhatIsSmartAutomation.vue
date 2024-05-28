<template>
    <div class="bg-dark py-[56px] xl:py-[88px] px-3 xl:px-[140px] ">
        <div class="max-w-[1160px] flex xl:flex-row flex-col gap-[48px] mx-auto">
            <div class="xl:w-[500px] xl:h-[368px] shrink-0 w-full">
                <NuxtImg :src="'./automation.png'" alt="people discussing over a laptop"
                    class="rounded-[5px] object-cover xl:object-center object-left-top" />
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
                <ul
                    class="xl:bg-[#372B4780] bg-transparent mt-[40px] xl:flex-row flex-col flex xl:gap-[40px] gap-[8px] xl:py-[16px] xl:px-[62px]  rounded-[5px] items-center">
                    <li
                        class="xl:py-0 flex xl:flex-col items-center gap-[8px] xl:bg-transparent bg-[#372B4780] py-4 w-full justify-center">
                        <nuxt-icon name="lightbulb" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Inteligencia Artificial
                        </p>
                    </li>
                    <small class="font-montserrat font-semibold text-[22px] leading-[26px]   text-white">+</small>
                    <li
                        class="xl:py-0 flex xl:flex-col items-center gap-[8px] xl:bg-transparent bg-[#372B4780] py-4 w-full justify-center">
                        <nuxt-icon name="cursor" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Tecnología de
                            Automatización</p>
                    </li>
                    <small class="font-montserrat font-semibold text-[22px] leading-[26px]   text-white">=</small>
                    <li
                        class="xl:py-0 flex xl:flex-col items-center gap-[8px] xl:bg-transparent bg-[#372B4780] py-4 w-full justify-center">
                        <nuxt-icon name="smile" filled class="text-[30px]" />
                        <p class="text-center font-raleway text-base leading-[21px] text-white">Automatización
                            Inteligente</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center">
            <button
                class="xl:w-auto w-full drop-shadow-sm  mt-[48px] text-white font-raleway font-semibold text-base leading-[27px]  py-[8px] xl:px-[22px] px-[18px] bg-mora rounded-[3px]">Conocer
                más de
                Automation Anywhere</button>
        </div>
    </div>
</template>

<style scoped></style>