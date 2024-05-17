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
        <div class="p-[40px_66px] flex justify-between items-center ">
            <div class="flex flex-col items-start gap-[24px]">
                <div>
                    <img :src="'./logoblanco.png'" alt="logos" width="467" height="56">
                </div>
                <div>
                    <nuxt-icon name="linkedin" filled width="20px" height="20px" class="text-[20px] cursor-pointer" />
                </div>
            </div>
            <div class="flex gap-[64px]">
                <div class="flex flex-col">
                    <h4
                        class="font-montserrat font-semibold text-[18px] leading-[24px]s pl-3 border-l-[4px] border-mora text-white">
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
        <div class="w-full max-w-[95%] bg-white h-0.5 mx-auto rounded-full" />
        <div class="flex justify-between p-[16px_66px_32px]">
            <p class="text-white font-montserrat text-base font-semibold leading-[24px] -tracking-[1%]">© Mora Group
                Technology
                2024</p>
            <a href="https://andromedacasadigital.netlify.app/" target="_blank"
                class="group text-white font-montserrat text-base font-regular leading-[24px] -tracking-[1%]">Designed
                by
                <span class="font-semibold text-lightPurple cursor-pointer group-hover:underline">Andrómeda</span></a>
        </div>
    </div>
</template>