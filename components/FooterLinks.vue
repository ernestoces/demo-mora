<script setup lang="ts">
const countries = [
    {
        name: "Peru",
        email: "contacto.peru@automationanywhere.com",
        phone: "+51 987 654 321"
    },
    {
        name: "Chile",
        email: "contacto.chile@automationanywhere.com",
        phone: "+56 2 2267897"
    },
]

const links = [
    { label: "Home", url: "/" },
    { label: "Automation Anywhere", url: "/" },
    { label: "Servicios por Industria", url: "/" },
    { label: "Nuestros Servicios", url: "/" },
    { label: "Nosotros", url: "/" },
    { label: "Novedades", url: "/" },
    { label: "Contacto", url: "/" },
]
</script>

<template>
    <div class="bg-dark w-full">
        <div class="p-[56px_16px] xl:p-[40px_66px] flex xl:flex-row flex-col justify-between items-center">
            <div class="flex flex-col items-start gap-[24px] w-full">
                <div class="xl:w-[467px] xl:h-[56px]">
                    <img preload src="~/assets/img/logoblanco.png" alt="logos" width="467px" height="56px"
                        class="object-cover" />
                </div>
                <div>
                    <nuxt-icon name="linkedin" filled width="20px" height="20px" class="text-[20px] cursor-pointer" />
                </div>
            </div>
            <div class="flex xl:flex-row flex-col xl:gap-[64px] gap-[32px] mt-[32px]">
                <div class="flex flex-col gap-[16px]">
                    <h4
                        class="fo nt-montserrat font-semibold text-[18px] leading-[24px]s pl-3 border-l-[4px] border-mora text-white">
                        Contacto</h4>
                    <div v-for="presence in countries" class="flex flex-col mt-[16px] gap-[16px] pl-4">
                        <p class="font-raleway text-[18px] leading-[21px] text-white ">{{ presence.name }}</p>
                        <div
                            class="flex flex-col gap-[8px] font-semibold font-raleway text-base leading-[21px] text-white">
                            <p>{{ presence.email }}</p>
                            <p>{{ presence.phone }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4
                        class="font-montserrat font-semibold text-[18px] leading-[24px]s pl-3 border-l-[4px] border-mora text-white">
                        Menú</h4>
                    <ul class="mt-[16px] flex flex-col gap-[10px]">
                        <li v-for="link in links"
                            class="pl-4 text-white font-raleway text-base leading-[21px] hover:text-lightPurple">
                            <a :href="link.url">{{ link.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full max-w-[90%] bg-white h-0.5 mx-auto rounded-full" />
        <div
            class="flex xl:flex-row flex-col gap-[48px] justify-between xl:p-[16px_66px_32px] p-[16px_16px_56px] items-center xl:items-normal">
            <p class="text-white font-montserrat text-base xl:font-semibold font-medium leading-[24px] -tracking-[1%]">©
                Mora Group
                Technology
                2024</p>
            <a href="https://andromedacasadigital.netlify.app/" target="_blank"
                class="group text-white font-montserrat text-base font-regular leading-[24px] -tracking-[1%]">Designed
                by
                <span class="font-semibold text-lightPurple cursor-pointer group-hover:underline">Andrómeda</span></a>
        </div>
    </div>
</template>