<template>
    <div class="bg-dark xl:py-[88px] py-[56px] mt-[12px] xl:mt-0">
        <div class="w-full max-w-[949px] mx-auto flex flex-col gap-[24px] xl:text-center px-4">
            <h2 class="font-montserrat font-bold text-[33px] leading-[40px] text-white ">Automation Anywhere:
                <span class="text-mora">Potenciando tu Empresa</span>
            </h2>
            <p class="font-raleway font-normal text-[18px] leading-[21px] text-white">Descubre Automation Success
                Platform. Con
                automatización nativa en la nube y un respaldo global, acelera
                tu transformación empresarial.</p>
        </div>
        <div class="xl:mt-[48px] mt-[32px] shrink-0 px-4">
            <NuxtImg preload :src="'./howitworks.png'" alt="diagram of process" width="907" height="592"
                class="object-cover mx-auto" />
        </div>
        <div class="xl:mt-[48px] mt-[32px] mx-auto flex flex-col items-center">
            <button
                class="font-raleway font-semibold leading-[27px] -tracking-[1%] p-[8px_22px] text-white bg-mora rounded-[3px]">Conoce
                más de
                Automation Anywhere</button>
        </div>
    </div>
</template>