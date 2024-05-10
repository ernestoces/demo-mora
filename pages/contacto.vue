<script setup lang="ts">
const branches = [
    {
        country: "Chile",
        email: "contacto.chile@automationanywhere.com",
        phone: "+56 2 2267897",
        location: "Monjitas 392, Of. 1601 - Santiago, Chile."
    },
    {
        country: "Perú",
        email: "contacto.peru@automationanywhere.com",
        phone: "+51 987 654 321",
        location: "Av. Rivera Navarrete 395 of. 1692 - San Isidro, Perú"
    }
]
</script>


<template>
    <div class="bg-dark py-[88px] px-[140px]">
        <div class="max-w-[1160px] mx-auto flex gap-[48px]">
            <div>
                <h1 class="text-white font-montserrat font-bold text-[50px] leading-[61px]">Contacta con <p
                        class="text-mora">Nosotros</p>
                </h1>
                <p class="mt-[24px]  font-raleway text-[18px] leading-[21px] text-white">Descubre cómo podemos
                    ayudar a
                    tu empresa y agenda una demostración de nuestros producto. Estaremos en contacto.</p>
                <div class="flex flex-col gap-[40px]">
                    <div v-for="branch in branches" class="flex flex-col gap-[24px] first:pt-[32px]">
                        <p class="font-raleway text-[18px] leading-[21px] text-white">
                            {{ branch.country }}
                        </p>
                        <ul class="flex flex-col gap-[16px]">
                            <li class="flex gap-2">
                                <nuxt-icon filled class="text-[24px]" name="email" />
                                <span
                                    class="font-raleway font-semibold text-base leading-[21px] text-white">Email</span>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.email
                                    }}</span>
                            </li>
                            <li class="flex gap-2">
                                <nuxt-icon filled class="text-[24px]" name="phone" />
                                <span
                                    class="font-raleway font-semibold text-base leading-[21px] text-white">Teléfono</span>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.phone
                                    }}</span>
                            </li>
                            <li class="flex gap-2">
                                <nuxt-icon filled class="text-[24px]" name="marker" />
                                <span
                                    class="font-raleway font-semibold text-base leading-[21px] text-white">Oficinas</span>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.location
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form action="https://formspree.io/f/mjvnzkrd" method="POST"
                class="w-full bg-white rounded-[5px]  px-[32px] py-[40px] flex flex-col gap-[24px]">
                <div class="flex flex-col gap-[4px]">
                    <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                        Nombres y Apellidos
                    </label>
                    <input placeholder="Ingresa tu nombre"
                        class="border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark" />
                </div>
                <div class="flex gap-4 w-full">
                    <div class="flex flex-col gap-[4px] w-full">
                        <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                            Correo electrónico
                        </label>
                        <input placeholder="Correo electrónico"
                            class="border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark" />
                    </div>
                    <div class="flex flex-col gap-[4px] w-full">
                        <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                            Número de contacto
                        </label>
                        <input placeholder="Número"
                            class="border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark" />
                    </div>
                </div>
                <div class="flex flex-col gap-[4px] w-full">
                    <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark" for="mensaje">Deja tu
                        mensaje</label>
                    <textarea
                        class="border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark"
                        id="mensaje" placeholder="Mensaje" rows="9"></textarea>
                </div>
                <button
                    class="w-full py-[8px] bg-mora text-white font-semibold text-base leading-[27px] -tracking-[1%] rounded-[3px]">Enviar
                    mensaje</button>
            </form>
        </div>
    </div>
</template>