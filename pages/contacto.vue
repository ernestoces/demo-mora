<script setup lang="ts">
const branches = [
    {
        country: "Chile",
        email: "contacto.chile@automationanywhere.com",
        phone: "+56937829614",
        location: "Monjitas 392, Of. 1601 - Santiago, Chile."
    },
    {
        country: "Perú",
        email: "contacto.peru@automationanywhere.com",
        phone: "+51980261884",
        location: "Av. Rivera Navarrete 395 of. 1602 - San Isidro, Perú"
    }
]

const successNote = ref("")
const contactForm = ref<HTMLFormElement | null>(null)

async function handleSubmit(event: Event) {
    const form = event.target as HTMLFormElement
    const data = new FormData(form);
    const res = await useFetch("https://formspree.io/f/mvoenwaq", {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
    })
    if (res) {
        successNote.value = "Gracias! Nos pondremos en contacto contigo pronto.";
        if (contactForm.value) {
            contactForm.value.reset();
        }
        setTimeout(() => {
            successNote.value = ""
        }, 11000)
    } else {
        throw new Error('Uh-oh! There was a problem submitting your form.');
    }
}

const inputClass = ref("bg-white border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark placeholder:font-raleway placeholder:text-base placeholder:text-[#828282] placeholder:font-normal placeholder:bg-white")
</script>


<template>
    <div class="bg-dark xl:py-[88px] pt-[32px] pb-[48px] xl:px-[140px] border-b-[#B8A2D63B] border-b-2">
        <div class="max-w-[1160px] mx-auto gap-[48px] xl:flex-row flex-col  flex justify-center">
            <div class=" flex  flex-col  items-start">
                <div class="px-4 xl:px-0 -order-1">
                    <h1 class="max-w-[541px] text-white font-montserrat font-bold text-[50px] leading-[61px]">Contacta
                        con <p class="text-mora">Nosotros</p>
                    </h1>
                    <p class="xl:mt-[24px] mt-[40px] font-raleway text-[18px] leading-[21px] text-white">Mantente al día
                        con las últimas noticias de la industria, artículos interesantes y próximos eventos. Descubre
                        nuestro contenido inspirador y únete a nosotros para influir en el futuro de la automatización y
                        la tecnología.</p>
                </div>
                <div class="flex flex-col gap-[40px] xl:order-1 order-2 px-4 xl:px-0">
                    <div v-for="branch in branches" class="flex flex-col gap-[24px] xl:first:pt-[32px]">
                        <p class="font-raleway text-[18px] leading-[21px] text-white">
                            {{ branch.country }}
                        </p>
                        <ul class="flex flex-col xl:gap-[16px] gap-[8px]">
                            <li class="flex gap-2 xl:flex-row flex-col">
                                <div class="flex gap-[6px] items-center xl:items-normal">
                                    <nuxt-icon filled class="text-[24px]" name="email" />
                                    <span
                                        class="font-raleway font-semibold text-base leading-[21px] text-white">Email</span>
                                </div>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.email
                                    }}</span>
                            </li>
                            <li class="flex xl:gap-2 gap-1 xl:flex-row flex-col">
                                <div class="flex gap-[6px] items-center xl:items-normal">
                                    <nuxt-icon filled class="text-[24px]" name="phone" />
                                    <span
                                        class="font-raleway font-semibold text-base leading-[21px] text-white">Teléfono</span>
                                </div>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.phone
                                    }}</span>
                            </li>
                            <li class="flex gap-2 xl:flex-row flex-col">
                                <div class="flex gap-[6px] items-center xl:items-normal">
                                    <nuxt-icon filled class="text-[24px]" name="marker" />
                                    <span
                                        class="font-raleway font-semibold text-base leading-[21px] text-white">Oficinas</span>
                                </div>
                                <span class="font-raleway text-base leading-[21px] text-white">{{ branch.location
                                    }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form @submit.prevent="handleSubmit" ref="contactForm"
                class="relative order-1 bg-white xl:rounded-[5px] xl:px-[32px] px-4 xl:py-[40px] py-[48px] flex flex-col gap-[24px] xl:w-auto w-full">
                <div class="flex flex-col gap-[4px]">
                    <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                        Nombres y Apellidos
                    </label>
                    <input name="name" placeholder="Ingresa tu nombre" :class="inputClass" />
                </div>
                <div class="xl:flex gap-4 w-full">
                    <div class="flex flex-col gap-[4px] w-full">
                        <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                            Correo electrónico
                        </label>
                        <input name="email" placeholder="Correo electrónico" :class="inputClass" />
                    </div>
                    <div class="flex flex-col gap-[4px] w-full mt-4 xl:mt-0">
                        <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark">
                            Número de contacto
                        </label>
                        <input name="phone" placeholder="Número" :class="inputClass" />
                    </div>
                </div>
                <div class="flex flex-col gap-[4px] w-full">
                    <label class="font-raleway font-semibold text-[14px] leading-[18px] text-dark" for="mensaje">Deja tu
                        mensaje</label>
                    <textarea name="message"
                        class="bg-white border-dark border-2 p-[10px] rounded-[2px] font-raleway font-semibold text-[14px] leading-[18px] text-dark placeholder:font-raleway placeholder:text-base placeholder:text-[#828282] placeholder:bg-white placeholder:font-normal"
                        id="mensaje" placeholder="Mensaje" rows="9"></textarea>
                </div>
                <button
                    class="w-full py-[8px] bg-mora text-white font-semibold text-base leading-[27px]  rounded-[3px]">Enviar
                    mensaje</button>
                <p v-if="successNote"
                    class="w-full absolute left-0 -bottom-[32px] text-center text-white font-raleway text-base leading-[21px] font-semibold">
                    {{
                        successNote }}</p>
            </form>
        </div>
    </div>
</template>